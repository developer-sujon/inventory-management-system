//External  lib import
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import Confetti from "react-confetti";

//External lib Import
import UserRequest from "../../APIRequest/UserRequest";
import { useEffect } from "react";

const VerifyAccountVerifyOtp = () => {
  const [result, setResult] = useState(false);
  const { email, otp } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    UserRequest.VerifyAccountVerifyOtp(email, otp).then((result) => {
      if (result) {
        setResult(true);
      } else {
        navigate("/verify-account-sent-otp");
      }
    });
  }, []);

  if (result) {
    return (
      <>
        <Container className="d-flex justify-content-center vh-100 align-items-center">
          <Button
            className="animated fadeInUp float-end btn btn-success"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </Container>
        <Confetti width={"1200px"} height={"1000px"} />
      </>
    );
  }
};

export default VerifyAccountVerifyOtp;
