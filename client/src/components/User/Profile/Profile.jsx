//External Lib Import
import { useRef } from "react";
import { Container, Col, Row, Card, Form, Button } from "react-bootstrap";

//Internal Lib Import
import FormValidation from "../../../helper/FormValidation";
import GetBase64 from "../../../helper/GetBase64";
import ToastMessage from "../../../helper/ToastMessage";

const Profile = () => {
  const UserProfile = {};

  let UserNameRef,
    UserMobileRef,
    UserImgRef,
    UserImgView = useRef();

  const previewImage = () => {
    const imgFile = UserImgRef.files[0];
    GetBase64(imgFile).then((base64Img) => {
      UserImgView.src = base64Img;
    });
  };

  const updateProfile = (e) => {
    e.preventDefault();
    if (FormValidation.isEmpty(UserNameRef.value)) {
      ToastMessage.errorMessage("Name is Required");
    } else if (!FormValidation.isMobile(UserMobileRef.value)) {
      ToastMessage.errorMessage("Invalid Mobile Number");
    } else {
      const name = UserNameRef.value;
      const phone = UserMobileRef.value;
      const photo = UserImgView.src;
    }
  };

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col>
          <Card className="w-90">
            <Card.Body>
              <img
                ref={(input) => (UserImgView = input)}
                className="icon-nav-img-lg"
                src="/unknown/bytesize_mail-(1)-1661776562988.png"
                alt={UserProfile["UserName"]}
                style={{ maxWidth: "200px" }}
              />
              <hr />

              <Form nSubmit={updateProfile}>
                <Row>
                  <Col md={4} className="p-2">
                    <Form.Group className="mb-3" controlId="photo">
                      <Form.Label>Profile Picture</Form.Label>
                      <Form.Control
                        onChange={previewImage}
                        ref={(input) => (UserImgRef = input)}
                        placeholder="User Email"
                        className="form-control animated fadeInUp"
                        type="file"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="p-2">
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        key={Date.now()}
                        defaultValue={UserProfile["email"]}
                        readOnly={true}
                        placeholder="User Email"
                        className="form-control animated fadeInUp"
                        type="email"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="p-2">
                    <Form.Group className="mb-3" controlId="UserName">
                      <Form.Label>User Name</Form.Label>
                      <Form.Control
                        key={Date.now()}
                        defaultValue={UserProfile["UserName"]}
                        readOnly={true}
                        placeholder="User Name"
                        className="form-control animated fadeInUp"
                        type="text"
                      />
                    </Form.Group>
                  </Col>
                  <Col className="p-2">
                    <Form.Group>
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        key={Date.now()}
                        defaultValue={UserProfile["name"]}
                        ref={(input) => (UserNameRef = input)}
                        placeholder="Name"
                        className="form-control animated fadeInUp"
                        type="text"
                      />
                    </Form.Group>
                  </Col>

                  <Col className="p-2">
                    <Form.Group>
                      <Form.Label>Mobile</Form.Label>
                      <Form.Control
                        key={Date.now()}
                        defaultValue={UserProfile["phone"]}
                        ref={(input) => (UserMobileRef = input)}
                        placeholder="Mobile"
                        className="form-control animated fadeInUp"
                        type="number"
                      />
                    </Form.Group>
                  </Col>
                  <Col className="p-2">
                    <Button
                      type="submit"
                      variant="success"
                      className="w-100 animated fadeInUp float-end mb-0 mt-4"
                    >
                      Update
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
