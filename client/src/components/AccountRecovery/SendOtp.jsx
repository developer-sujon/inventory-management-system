//External lib Import
import { useRef } from "react";
import { Container, Col, Row, Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UserRequest from "../../APIRequest/UserRequest";

//Internal  lib import
import FormValidation from "../../helper/FormValidation";
import ToastMessage from "../../helper/ToastMessage";

const SendOtp = () => {
  const navigate = useNavigate();
  let emailRef = useRef();

  const SendRecoveryOtp = (e) => {
    e.preventDefault();
    if (!FormValidation.isEmail(emailRef.value)) {
      ToastMessage.errorMessage("Invalid Email Address");
    } else {
      UserRequest.SendRecoveryOtp(emailRef.value).then((result) => {
        if (result) {
          navigate("/verify-otp");
        }
      });
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={7} lg={6} className="" style={{ marginTop: "100px" }}>
            <Card className="w-90  p-4">
              <Card.Body>
                <Card.Title>Email Address</Card.Title>
                <Form onSubmit={SendRecoveryOtp}>
                  <Form.Group className="mb-3" controlId="passwordRef">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control
                      ref={(input) => (emailRef = input)}
                      placeholder="Email Address"
                      className="animated fadeInUp"
                      type="email"
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 animated fadeInUp float-end "
                  >
                    Next
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SendOtp;
