//External Lib Import
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

//External Lib Import
import FormValidation from "../../helper/FormValidation";
import ToastMessage from "../../helper/ToastMessage";
import CustomerRequest from "../../APIRequest/CustomerRequest";
import { useDispatch, useSelector } from "react-redux";
import {
  ResetCustomerDetails,
  SetCustomerOnChange,
} from "../../redux/slices/CustomerSlice";

const CustomerCreateUpdate = () => {
  let [ObjectID, SetObjectID] = useState(0);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { CustomerDetails } = useSelector((state) => state.Customer);

  useEffect(() => {
    let params = new URLSearchParams(window.location.search);
    let id = params.get("id");
    if (id !== null) {
      SetObjectID(id);
      CustomerRequest.CustomerDetails(id);
    }
  }, []);

  const SaveChange = async (e) => {
    e.preventDefault();

    if (FormValidation.isEmpty(CustomerDetails.CustomerName)) {
      ToastMessage.errorMessage("Customer Name Required !");
    } else if (!FormValidation.isEmail(CustomerDetails.CustomerEmail)) {
      ToastMessage.errorMessage("Valid Email Required !");
    } else if (!FormValidation.isMobile(CustomerDetails.CustomerPhone)) {
      ToastMessage.errorMessage("Valid Phone Required !");
    } else if (FormValidation.isEmpty(CustomerDetails.CustomerAddress)) {
      ToastMessage.errorMessage("Customer Address Required !");
    } else {
      if (!ObjectID) {
        CustomerRequest.CustomerCreate({
          CustomerName: CustomerDetails.CustomerName,
          CustomerEmail: CustomerDetails.CustomerEmail,
          CustomerPhone: CustomerDetails.CustomerPhone,
          CustomerAddress: CustomerDetails.CustomerAddress,
        }).then((result) => {
          if (result) {
            dispatch(ResetCustomerDetails());
            navigate("/customer-list");
          }
        });
      } else {
        CustomerRequest.CustomerUpdate(ObjectID, {
          CustomerName: CustomerDetails.CustomerName,
          CustomerEmail: CustomerDetails.CustomerEmail,
          CustomerPhone: CustomerDetails.CustomerPhone,
          CustomerAddress: CustomerDetails.CustomerAddress,
        }).then((result) => {
          if (result) {
            dispatch(ResetCustomerDetails());
            navigate("/customer-list");
          }
        });
      }
    }
  };

  return (
    <Container fluid={true} className="content-body">
      <Row className="justify-content-center">
        <Col>
          <div className="page-title-box">
            <div className="page-title-right">
              <Breadcrumb>
                <li className="breadcrumb-item">
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/customer-list">Customer List</Link>
                </li>
              </Breadcrumb>
            </div>
          </div>
        </Col>
      </Row>

      <Form onSubmit={SaveChange}>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Row>
                  <h5>
                    {ObjectID ? "Update Customer" : "Create New Customer"}
                  </h5>
                  <hr className="bg-light" />
                  <Row>
                    <Col md={4} className="p-2">
                      <Form.Group className="mb-3" controlId="CustomerName">
                        <Form.Label>
                          Customer Name <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          defaultValue={CustomerDetails.CustomerName}
                          onChange={(e) => {
                            dispatch(
                              SetCustomerOnChange({
                                name: "CustomerName",
                                value: e.target.value,
                              }),
                            );
                          }}
                        />
                      </Form.Group>
                    </Col>

                    <Col md={4} className="p-2">
                      <Form.Group className="mb-3" controlId="CustomerEmail">
                        <Form.Label>
                          Customer Email <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          defaultValue={CustomerDetails.CustomerEmail}
                          onChange={(e) => {
                            dispatch(
                              SetCustomerOnChange({
                                name: "CustomerEmail",
                                value: e.target.value,
                              }),
                            );
                          }}
                        />
                      </Form.Group>
                    </Col>

                    <Col md={4} className="p-2">
                      <Form.Group className="mb-3" controlId="CustomerPhone">
                        <Form.Label>
                          Customer Phone <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                          key={new Date()}
                          type="text"
                          defaultValue={CustomerDetails.CustomerPhone}
                          onChange={(e) => {
                            dispatch(
                              SetCustomerOnChange({
                                name: "CustomerPhone",
                                value: e.target.value,
                              }),
                            );
                          }}
                        />
                      </Form.Group>
                    </Col>

                    <Col md={12} className="p-2">
                      <Form.Group className="mb-3" controlId="CustomerAddress">
                        <Form.Label>
                          Customer Address<span className="text-danger">*</span>
                        </Form.Label>

                        <Form.Control
                          as="textarea"
                          defaultValue={CustomerDetails.CustomerAddress}
                          onChange={(e) => {
                            dispatch(
                              SetCustomerOnChange({
                                name: "CustomerAddress",
                                value: e.target.value,
                              }),
                            );
                          }}
                          rows="8"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Row>
                <Row>
                  <Col sm={4} className="p-2">
                    <Button type="submit" className="btn-sm my-3">
                      {ObjectID ? "Update" : "Save Change"}
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default CustomerCreateUpdate;
