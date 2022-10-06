//External Lib Import
import React from "react";
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
import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col>
          <div className="page-title-box">
            <div className="page-title-right">
              <Breadcrumb>
                <li className="breadcrumb-item">
                  <Link to="/dashboard">Library</Link>
                </li>
                <li className="breadcrumb-item">Library</li>
                <li className="breadcrumb-item">Data</li>
              </Breadcrumb>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title className="mb-3">Product List</Card.Title>

              <Form.Group
                className="d-flex align-items-center"
                controlId="product"
              >
                <Form.Label className="m-0">Search :</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="60 records..."
                  className="w-auto ms-1"
                />
              </Form.Group>

              <Table responsive>
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

              <div className="d-md-flex align-items-center md-text-center pb-1">
                <Form.Group
                  className="md-d-inline-block me-3 mb-3"
                  controlId="perPage"
                >
                  <Form.Label>Display :</Form.Label>
                  <Form.Select className="d-inline-block md-w-auto md-ms-1">
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={60}>All</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group
                  className="md-d-inline-block me-3 mb-3"
                  controlId="pageNo"
                >
                  <Form.Label>Go to page :</Form.Label>
                  <Form.Control
                    type="number"
                    min={1}
                    placeholder="60 records..."
                    className="md-w-25 md-ms-1 d-inline-block"
                    defaultValue={1}
                  />
                </Form.Group>

                <ReactPaginate
                  previousLabel="<"
                  nextLabel=">"
                  pageClassName="page-item d-none d-sm-block"
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
                  containerClassName="pagination m-auto mt-3 md-mt-0"
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
