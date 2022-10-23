// @flow
import React, { useEffect } from "react";
import { Button, Alert, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";

import { VerticalForm, FormInput } from "../../components/";

import AccountLayout from "./AccountLayout";

/* bottom link */
const BottomLink = () => {
  const { t } = useTranslation();

  return (
    <Row className="mt-3">
      <Col className="text-center">
        <p className="text-muted">
          {t("Back to")}{" "}
          <Link to={"/account/login"} className="text-muted ms-1">
            <b>{t("Log In")}</b>
          </Link>
        </p>
      </Col>
    </Row>
  );
};

const ForgetPassword = (): React$Element<any> => {
  const { t } = useTranslation();

  /*
   * form validation schema
   */
  const schemaResolver = yupResolver(
    yup.object().shape({
      username: yup.string().required(t("Please enter Username")),
    }),
  );

  /*
   * handle form submission
   */
  const onSubmit = (formData) => {};

  return (
    <>
      <AccountLayout bottomLinks={<BottomLink />}>
        <div className="text-center m-auto">
          <h4 className="text-dark-50 text-center mt-0 font-weight-bold">
            {t("Reset Password")}
          </h4>
          <p className="text-muted mb-4">
            {t(
              "Enter your email address and we'll send you an email with instructions to reset your password",
            )}
          </p>
        </div>

        <Alert variant="success">'sucess'</Alert>

        <Alert variant="danger" className="my-2">
          'error'
        </Alert>

        <VerticalForm onSubmit={onSubmit} resolver={schemaResolver}>
          <FormInput
            label={t("Username")}
            type="text"
            name="username"
            placeholder={t("Enter your Username")}
            containerClass={"mb-3"}
          />

          <div className="mb-3 mb-0 text-center">
            <Button variant="primary" type="submit">
              {t("Submit")}
            </Button>
          </div>
        </VerticalForm>
      </AccountLayout>
    </>
  );
};

export default ForgetPassword;
