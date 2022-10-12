//External Lib Import
import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Card,
  Button,
  Breadcrumb,
  Form,
} from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

//Internal lib imports
import CustomerRequest from "../../APIRequest/CustomerRequest";
import AleartMessage from "../../helper/AleartMessage";
import DateFormatter from "../../utility/DateFormatter";

const CustomerList = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [searchKey, setSearchKey] = useState(0);

  useEffect(() => {
    CustomerRequest.CustomerList(pageNumber, perPage, searchKey);
  }, []);

  const { CustomerLists, TotalCustomer } = useSelector(
    (state) => state.Customer,
  );

  const perPageOnChange = (e) => {
    setPerPage(e.target.value);
    CustomerRequest.CustomerList(1, perPage, searchKey);
  };

  const searchKeywordOnChange = (e) => {
    const key = e.target.value || 0;
    setSearchKey(key);
    CustomerRequest.CustomerList(1, perPage, searchKey);
  };

  const handlePageClick = (e) => {
    setPageNumber(e.selected + 1);
    CustomerRequest.CustomerList(1, perPage, searchKey);
  };

  const goToPage = (e) => {
    setPageNumber(e.target.value);
    CustomerRequest.CustomerList(1, perPage, searchKey);
  };

  const deleteCustomer = (id) => {
    AleartMessage.Delete(id, CustomerRequest.CustomerDelete).then((result) => {
      if (result) {
        CustomerRequest.CustomerList(pageNumber, perPage, searchKey);
      }
    });
  };

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col>
          <div className="page-title-box">
            <div className="page-title-right">
              <Breadcrumb>
                <li className="breadcrumb-item">
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/customer-list">Footer List</Link>
                </li>
              </Breadcrumb>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title className="mb-3">
                Total Customer {TotalCustomer}
              </Card.Title>

              <Form.Group
                className="d-md-flex align-items-center"
                controlId="product"
              >
                <Form.Label>Search :</Form.Label>
                <Form.Control
                  onChange={searchKeywordOnChange}
                  type="email"
                  placeholder="60 records..."
                  className="w-auto ms-1"
                />
              </Form.Group>

              <Table responsive>
                <thead>
                  <tr>
                    <th>Customer Name</th>
                    <th>Customer Email</th>
                    <th>Customer Phone</th>
                    <th>Customer Address</th>
                    <th>Created</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {CustomerLists?.map((CustomerDetails) => {
                    return (
                      <tr key={CustomerDetails._id}>
                        <td>{CustomerDetails.CustomerName}</td>
                        <td>{CustomerDetails.CustomerEmail}</td>
                        <td>{CustomerDetails.CustomerPhone}</td>
                        <td>{CustomerDetails.CustomerAddress}</td>
                        <td>{DateFormatter(CustomerDetails.createdAt)}</td>
                        <td>
                          <Button
                            className="action-icon text-white me-1"
                            variant="warning"
                          >
                            <Link
                              to={`/customer-create-update?id=${CustomerDetails._id}`}
                            >
                              <AiOutlineEdit />
                            </Link>
                          </Button>
                          <Button
                            className="action-icon text-white me-1"
                            variant="danger"
                            onClick={(e) => deleteCustomer(CustomerDetails._id)}
                          >
                            <AiOutlineDelete />
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>

              <div className="d-md-flex align-items-center md-text-center pb-1">
                <Form.Group
                  className="md-d-inline-block me-3 mb-3"
                  controlId="perPage"
                >
                  <Form.Label>Display :</Form.Label>
                  <Form.Select
                    className="d-inline-block md-w-auto md-ms-1"
                    onChange={perPageOnChange}
                  >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group
                  className="md-d-inline-block me-3 mb-3"
                  controlId="pageNo"
                >
                  <Form.Label>Go to page :</Form.Label>
                  <Form.Control
                    onChange={goToPage}
                    type="number"
                    min={1}
                    className="md-w-25 md-ms-1 d-inline-block"
                    defaultValue={1}
                  />
                </Form.Group>

                <ReactPaginate
                  previousLabel="<"
                  nextLabel=">"
                  pageClassName="page-item d-none d-sm-block mb-0"
                  pageLinkClassName="page-link"
                  previousClassName="page-item"
                  previousLinkClassName="page-link"
                  nextClassName="page-item"
                  nextLinkClassName="page-link"
                  breakLabel="..."
                  breakClassName="page-item"
                  breakLinkClassName="page-link"
                  pageCount={TotalCustomer / perPage}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  containerClassName="pagination m-auto mt-3 md-mt-0"
                  activeClassName="active"
                  onPageChange={handlePageClick}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomerList;
