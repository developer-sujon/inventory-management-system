//External Import
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import { Container, Col, Row, Card, Form, Button } from "react-bootstrap";

//Internal Import
const LoginUser = () => {
  const LoginSchema = yup.object().shape({
    Email: yup.string().required(),
    Password: yup.string().required(),
  });

  return (
    <div className="min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={7} lg={6} className="" style={{ marginTop: "100px" }}>
            <Card className="w-90 p-4">
              <Card.Body>
                <Card.Title>Login Your Account</Card.Title>
                <Formik
                  validationSchema={LoginSchema}
                  onSubmit={console.log}
                  initialValues={{
                    Email: "",
                    Password: "",
                  }}
                >
                  {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    isValid,
                    errors,
                  }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="Email">
                        <Form.Label>User Email Address</Form.Label>
                        <Form.Control
                          placeholder="User Email Address"
                          className="animated fadeInUp"
                          type="text"
                          name="Email"
                          value={values.Email}
                          onChange={handleChange}
                          isValid={touched.Email && !errors.Email}
                          isInvalid={!!errors.Email}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="Password">
                        <Form.Label>User Password</Form.Label>
                        <Form.Control
                          placeholder="User Password"
                          className="animated fadeInUp"
                          type="password"
                          name="Password"
                          value={values.Password}
                          onChange={handleChange}
                          isValid={touched.Password && !errors.Password}
                          isInvalid={!!errors.Password}
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
                  )}
                </Formik>
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
                    Forget Password
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
