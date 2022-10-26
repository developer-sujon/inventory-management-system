// External Lib Import
import React, { useEffect, useState } from "react";
import { Row, Col, Card, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { GrDocumentCsv } from "react-icons/gr";
import { SiMicrosoftexcel } from "react-icons/si";
import classNames from "classnames";

// Internal  Lib Import
import PageTitle from "../../components/Ui/PageTitle";
import { useSelector } from "react-redux";
import ExpenseRequest from "../../APIRequest/ExpenseRequest";
import AleartMessage from "../../helpers/AleartMessage";
import ExportDataJSON from "../../utils/ExportFromJSON";
import DateFormatter from "../../utils/DateFormatter";
import HtmlParser from "../../utils/HtmlParser";

const ExpenseListPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [searchKey, setSearchKey] = useState(0);

  useEffect(() => {
    ExpenseRequest.ExpenseList(pageNumber, perPage, searchKey);
  }, [pageNumber, perPage, searchKey]);

  const { ExpenseLists, TotalExpense } = useSelector((state) => state.Expense);

  const PerPageOnChange = (e) => {
    if (e.target.value === "All") {
      setPerPage(TotalExpense);
    } else {
      setPerPage(e.target.value);
    }
  };

  const SearchKeywordOnChange = (e) => {
    const key = e.target.value || 0;
    setSearchKey(key);
  };

  const HandlePageClick = (e) => {
    setPageNumber(e.selected + 1);
  };

  const GoToPage = (e) => {
    setPageNumber(e.target.value);
  };

  const DeleteExpense = (id) => {
    console.log(id);
    AleartMessage.Delete(id, ExpenseRequest.ExpenseDelete).then((result) => {
      if (result) {
        ExpenseRequest.ExpenseList(pageNumber, perPage, searchKey);
      }
    });
  };

  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Expense", path: "/expense/expense-list" },
          {
            label: "Expense List",
            path: "/expense/expense--list",
            active: true,
          },
        ]}
        title={"Expense List"}
      />
      <Row>
        <Col xs={12}>
          <Card>
            <Card.Body>
              <Row className="mb-2">
                <Col sm={5}>
                  <Link
                    to="/expense/expense-create-update"
                    className="btn btn-danger mb-2"
                  >
                    <i className="mdi mdi-plus-circle me-2"></i> Add Expense
                  </Link>
                </Col>

                <Col sm={7}>
                  <div className="text-sm-end">
                    <Button variant="success" className="mb-2 me-1">
                      <i className="mdi mdi-cog-outline"></i>
                    </Button>

                    <Button variant="light" className="mb-2 me-1">
                      Import
                    </Button>

                    <Button
                      variant="light"
                      className="mb-2 me-1"
                      onClick={() =>
                        ExportDataJSON(ExpenseLists, "Expense", "xls")
                      }
                    >
                      <SiMicrosoftexcel /> Export
                    </Button>

                    <Button
                      variant="light"
                      className="mb-2"
                      onClick={() =>
                        ExportDataJSON(ExpenseLists, "Expense", "csv")
                      }
                    >
                      <GrDocumentCsv /> Export
                    </Button>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="mb-2">
                    <span className="d-flex align-items-center">
                      Search :{" "}
                      <input
                        placeholder={TotalExpense + " records..."}
                        className="form-control w-auto ms-1"
                        defaultValue=""
                        onChange={SearchKeywordOnChange}
                      />
                    </span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Table className="table-centered react-table" responsive>
                    <thead
                      className="table-light"
                      style={{ backgroundColor: "#eef2f7" }}
                    >
                      <tr>
                        <th>Expense Type</th>
                        <th>Expense Name</th>
                        <th>Expense Amount</th>
                        <th>Expense Note</th>
                        <th>Created On</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ExpenseLists?.map((record, index) => {
                        return (
                          <tr key={index}>
                            <td>{record?.ExpenseType}</td>
                            <td>{record?.ExpenseName}</td>
                            <td>{record?.ExpenseAmount}</td>
                            <td>
                              {record?.ExpenseNote &&
                                HtmlParser(record?.ExpenseNote.slice(0, 100))}
                            </td>
                            <td>{DateFormatter(record?.createdAt)}</td>
                            <td>
                              <Link
                                to={`/expense/expense-create-update?id=${record?._id}`}
                                className="action-icon text-warning"
                              >
                                <i className="mdi mdi-square-edit-outline"></i>
                              </Link>
                              <Link
                                className="action-icon text-danger"
                                onClick={() => DeleteExpense(record?._id)}
                              >
                                <i className="mdi mdi-delete"></i>
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="d-lg-flex align-items-center text-center pb-1">
                    <div className="d-inline-block me-3">
                      <label className="me-1">Display :</label>
                      <select
                        className="form-select d-inline-block w-auto"
                        onChange={PerPageOnChange}
                      >
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value="All">All</option>
                      </select>
                    </div>
                    <span className="me-3">
                      Page
                      <strong>
                        {pageNumber} of {Math.ceil(TotalExpense / perPage)}
                      </strong>
                    </span>
                    <span className="d-inline-block align-items-center text-sm-start text-center my-sm-0 my-2">
                      <label>Go to page : </label>
                      <input
                        type="number"
                        min={1}
                        className="form-control w-25 ms-1 d-inline-block"
                        defaultValue={1}
                        onChange={GoToPage}
                      />
                    </span>
                    <ReactPaginate
                      previousLabel="<"
                      nextLabel=">"
                      pageClassName="page-item d-none d-xl-inline-block"
                      pageLinkClassName="page-link"
                      previousClassName="page-item"
                      previousLinkClassName="page-link"
                      nextClassName="page-item"
                      nextLinkClassName="page-link"
                      breakLabel="..."
                      breakClassName="page-item"
                      breakLinkClassName="page-link"
                      pageCount={TotalExpense / perPage}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={5}
                      containerClassName="pagination pagination-rounded d-inline-flex ms-auto align-item-center mb-0"
                      activeClassName="active"
                      onPageChange={HandlePageClick}
                      initialPage={pageNumber - 1}
                      forcePage={pageNumber - 1}
                    />
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ExpenseListPage;
