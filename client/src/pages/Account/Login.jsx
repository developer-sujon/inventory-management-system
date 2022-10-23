//Exteral Lib Import
import React, { useEffect } from "react";
import { Button, Alert, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";

//actions

// components
import { VerticalForm, FormInput } from "../../components/Ui";

import AccountLayout from "./AccountLayout";

/* bottom link of account pages */
const BottomLink = () => {
  const { t } = useTranslation();

  return (
    <Row className="mt-3">
      <Col className="text-center">
        <p className="text-muted">
          {t("Don't have an account?")}{" "}
          <Link to={"/account/register"} className="text-muted ms-1">
            <b>{t("Sign Up")}</b>
          </Link>
        </p>
      </Col>
    </Row>
  );
};

const Login = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  /*
    form validation schema
    */
  const schemaResolver = yupResolver(
    yup.object().shape({
      username: yup.string().required(t("Please enter Username")),
      password: yup.string().required(t("Please enter Password")),
    }),
  );

  /*
    handle form submission
    */
  const onSubmit = (formData) => {};

  return (
    <>
      <AccountLayout bottomLinks={<BottomLink />}>
        <div className="text-center w-75 m-auto">
          <h4 className="text-dark-50 text-center mt-0 fw-bold">
            {t("Sign In")}
          </h4>
          <p className="text-muted mb-4">
            {t("Enter your email address and password to access admin panel.")}
          </p>
        </div>

        <Alert variant="danger" className="my-2">
          i
        </Alert>

        <VerticalForm
          onSubmit={onSubmit}
          resolver={schemaResolver}
          defaultValues={{ username: "test", password: "test" }}
        >
          <FormInput
            label={t("Username")}
            type="text"
            name="username"
            placeholder={t("Enter your Username")}
            containerClass={"mb-3"}
          />
          <FormInput
            label={t("Password")}
            type="password"
            name="password"
            placeholder={t("Enter your password")}
            containerClass={"mb-3"}
          >
            <Link
              to="/account/forget-password"
              className="text-muted float-end"
            >
              <small>{t("Forgot your password?")}</small>
            </Link>
          </FormInput>

          <div className="mb-3 mb-0 text-center">
            <Button variant="primary" type="submit" disabled={false}>
              {t("Log In")}
            </Button>
          </div>
        </VerticalForm>
      </AccountLayout>
    </>
  );
};

export default Login;
