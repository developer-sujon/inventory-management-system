//External Lib Import
import { Link } from "react-router-dom";
import { Container, Col, Row, Card, Form, Button } from "react-bootstrap";
import { useRef } from "react";
import FormValidation from "../../helper/FormValidation";
import ToastMessage from "../../helper/ToastMessage";
import AuthRequest from "../../APIRequest/AuthRequest";

//Internal Lib Import
const LoginUser = () => {
  let EmailRef,
    PasswordRef = useRef();

  const SubmitLogin = (e) => {
    e.preventDefault();
    let Email = EmailRef.value;
    let Password = PasswordRef.value;

    if (FormValidation.isEmail(Email) === false) {
      ToastMessage.errorMessage("Invalid Email Address!");
    } else if (FormValidation.isEmpty(Password)) {
      ToastMessage.errorMessage("Password Required!");
    } else {
      AuthRequest.LoginUser({ Email, Password });
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={7} lg={6} className="" style={{ marginTop: "100px" }}>
            <Card className="w-90 p-4">
              <Card.Body>
                <Card.Title>Login Your Account</Card.Title>
                <Form onSubmit={SubmitLogin}>
                  <Form.Group className="mb-3" controlId="Email">
                    <Form.Label>User Email Address</Form.Label>
                    <Form.Control
                      placeholder="User Email Address"
                      className="animated fadeInUp"
                      type="text"
                      name="Email"
                      ref={(el) => (EmailRef = el)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="Password">
                    <Form.Label>User Password</Form.Label>
                    <Form.Control
                      placeholder="User Password"
                      className="animated fadeInUp"
                      type="Password"
                      name="Password"
                      ref={(el) => (PasswordRef = el)}
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-100 animated fadeInUp float-end"
                  >
                    Next
                  </Button>
                </Form>
                <div className="text-center w-100">
                  <Link
                    className="text-center animated fadeInUp"
                    to="/register"
                  >
                    Sign Up
                  </Link>
                  <br />
                  <Link
                    className="text-center animated fadeInUp"
                    to="/send-otp"
                  >
                    Forget Passwordword
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginUser;
