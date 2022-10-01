//External Lib Import
import { useRef } from "react";
import { Container, Col, Row, Card, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserRequest from "../../APIRequest/UserRequest";

//Internal Lib Import
import FormValidation from "../../helper/FormValidation";
import GetBase64 from "../../helper/GetBase64";
import ToastMessage from "../../helper/ToastMessage";

const Profile = () => {
  const navigate = useNavigate();
  const { UserDetails } = useSelector((state) => state.User);

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
      const Name = UserNameRef.value;
      const Phone = UserMobileRef.value;
      const Image = UserImgView.src;

      UserRequest.UserUpdate({ Name, Phone, Image }).then((result) => {
        if (result) {
          navigate("/");
        }
      });
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
                src={UserDetails?.Image}
                alt={UserDetails?.Phone}
                style={{ maxWidth: "200px" }}
              />
              <hr />

              <Form onSubmit={updateProfile}>
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
                        defaultValue={UserDetails?.Email}
                        readOnly={true}
                        placeholder="User Email"
                        className="form-control animated fadeInUp"
                        type="email"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="p-2">
                    <Form.Group className="mb-3" controlId="Name">
                      <Form.Label> Name</Form.Label>
                      <Form.Control
                        key={Date.now()}
                        defaultValue={UserDetails?.Name}
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
                        defaultValue={UserDetails?.Phone}
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
                      variant="primary"
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
