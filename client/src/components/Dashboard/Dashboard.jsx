//External Lib Import
import React from "react";
import { Container, Row, Col, Table, Card, Button } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from "react-icons/ai";

const Dashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <div className="page-title-box">
            <div className="page-title-right">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item">
                    <a href="/">Hyper</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/features/tables/advanced">Tables</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Advanced Tables
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title className="mb-3">Product List</Card.Title>
              <label className="d-flex align-items-center" for="product">
                Search :{" "}
                <input
                  id="product"
                  placeholder="60 records..."
                  className="form-control w-auto ms-1"
                  defaultValue=""
                />
              </label>
              <Table>
                <thead>
                  <tr>
                    <th>Sl</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                      <Button
                        className="action-icon text-white me-1"
                        href="/apps/ecommerce/products"
                      >
                        <AiOutlineEye />
                      </Button>
                      <Button
                        className="action-icon text-white me-1"
                        variant="warning"
                        href="/apps/ecommerce/products"
                      >
                        <AiOutlineEdit />
                      </Button>
                      <Button
                        className="action-icon text-white me-1"
                        variant="danger"
                        href="/apps/ecommerce/products"
                      >
                        <AiOutlineDelete />
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>

              <div className="d-lg-flex align-items-center text-center pb-1">
                <div className="d-inline-block me-3">
                  <label className="me-1">Display :</label>
                  <select className="form-select d-inline-block w-auto">
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={60}>All</option>
                  </select>
                </div>
                <span className="me-3">
                  Page <strong>1 of 12</strong>{" "}
                </span>
                <span className="d-inline-block align-items-center text-sm-start text-center my-sm-0 my-2">
                  <label>Go to page : </label>
                  <input
                    type="number"
                    min={1}
                    className="form-control w-25 ms-1 d-inline-block"
                    defaultValue={1}
                  />
                </span>
                <ReactPaginate
                  previousLabel="<"
                  nextLabel=">"
                  pageClassName="page-item"
                  pageLinkClassName="page-link"
                  previousClassName="page-item"
                  previousLinkClassName="page-link"
                  nextClassName="page-item"
                  nextLinkClassName="page-link"
                  breakLabel="..."
                  breakClassName="page-item"
                  breakLinkClassName="page-link"
                  pageCount={100 / 10}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  containerClassName="pagination"
                  activeClassName="active"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
