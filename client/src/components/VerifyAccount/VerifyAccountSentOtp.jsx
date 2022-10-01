//External lib Import
import { Container, Col, Row, Card, Form, Button } from "react-bootstrap";

//Internal  lib import
import UserRequest from "../../APIRequest/UserRequest";
import SessionHelper from "../../helper/SessionHelper";

const VerifyAccountSentOtp = () => {
  const SendRecoveryOtp = (e) => {
    e.preventDefault();
    UserRequest.VerifyAccountSentOtp();
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={7} lg={6} className="" style={{ marginTop: "100px" }}>
          <Card className="w-90  p-4">
            <Card.Body>
              <Card.Title>Email Address</Card.Title>
              <Form onSubmit={SendRecoveryOtp}>
                <Form.Group className="mb-3" controlId="passwordRef">
                  <Form.Control
                    defaultValue={SessionHelper.GetVerifyEmail()}
                    readOnly
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
                  Verify Account
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default VerifyAccountSentOtp;
