// @flow
import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import classNames from "classnames";
import { ErrorMessage, Field } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import FileUploader from "./FileUploader";

const FormInput = ({
  label,
  type,
  name,
  placeholder,
  className,
  labelClassName,
  containerClass,
  children,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  if (type === "password") {
    return (
      <Form.Group className={containerClass} controlId={name}>
        {label ? (
          <>
            <Form.Label className={labelClassName}>{label}</Form.Label>
            {children}
          </>
        ) : null}

        <Field name={name}>
          {({ field, form: { touched, errors } }) => (
            <>
              <InputGroup>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder={placeholder}
                  className={className}
                  isInvalid={touched[name] && errors[name] ? true : false}
                  {...field}
                  autoComplete={name}
                />
                <div
                  className={classNames(
                    "input-group-text",
                    "input-group-password",
                    {
                      "show-password": showPassword,
                    },
                  )}
                  data-password={showPassword ? "true" : "false"}
                >
                  <span
                    className="password-eye"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  ></span>
                </div>
              </InputGroup>

              <ErrorMessage name={name}>
                {(msg) => (
                  <Form.Control.Feedback
                    type="invalid"
                    style={{ display: "block" }}
                  >
                    {msg}
                  </Form.Control.Feedback>
                )}
              </ErrorMessage>
            </>
          )}
        </Field>
      </Form.Group>
    );
  } else if (type === "select") {
    return (
      <Form.Group className={containerClass} controlId={name}>
        {label ? (
          <Form.Label className={labelClassName}>{label}</Form.Label>
        ) : null}

        <Field name={name}>
          {({ field, form: { touched, errors } }) => (
            <>
              <Form.Select
                type={type}
                label={label}
                className={className}
                isInvalid={errors && errors[name] ? true : false}
                {...field}
              >
                {children}
              </Form.Select>

              <ErrorMessage name={name}>
                {(msg) => (
                  <Form.Control.Feedback type="invalid">
                    {msg}
                  </Form.Control.Feedback>
                )}
              </ErrorMessage>
            </>
          )}
        </Field>
      </Form.Group>
    );
  } else if (type === "checkbox") {
    return (
      <Form.Group className={containerClass} controlId={name}>
        <Field name={name}>
          {({ field, form: { touched, errors } }) => (
            <>
              <Form.Check
                type={type}
                label={label}
                className={className}
                isInvalid={errors && errors[name] ? true : false}
                {...field}
              />

              <ErrorMessage name={name}>
                {(msg) => (
                  <Form.Control.Feedback type="invalid">
                    {msg}
                  </Form.Control.Feedback>
                )}
              </ErrorMessage>
            </>
          )}
        </Field>
      </Form.Group>
    );
  } else if (type === "react-phone") {
    return (
      <Form.Group className={containerClass} controlId={name}>
        {label ? (
          <Form.Label className={labelClassName}>{label}</Form.Label>
        ) : null}
        <Field name={name}>
          {({ field, form: { touched, errors, setFieldValue, values } }) => (
            <>
              <PhoneInput
                country={"bd"}
                value={values?.Phone}
                onChange={(phone) => setFieldValue(name, phone)}
                className={className}
                isInvalid={errors && errors[name] ? true : false}
              />

              <ErrorMessage name={name}>
                {(msg) => (
                  <Form.Control.Feedback
                    type="invalid"
                    style={{ display: "block" }}
                  >
                    {msg}
                  </Form.Control.Feedback>
                )}
              </ErrorMessage>
            </>
          )}
        </Field>
      </Form.Group>
    );
  } else if (type === "dropzone") {
    return (
      <Form.Group className={containerClass} controlId={name}>
        <Field name={name}>
          {({ field, form: { touched, errors, setFieldValue, values } }) => (
            <>
              <Form.Group className="mb-3 mt-3 mt-xl-0">
                {label ? (
                  <Form.Label className={labelClassName}>{label}</Form.Label>
                ) : null}
                <p className="text-muted font-14">
                  Recommended thumbnail size 800x400 (px).
                </p>
                <FileUploader
                  onFileUpload={(files) => setFieldValue(name, files)}
                />
              </Form.Group>

              <ErrorMessage name={name}>
                {(msg) => (
                  <Form.Control.Feedback
                    type="invalid"
                    style={{ display: "block" }}
                  >
                    {msg}
                  </Form.Control.Feedback>
                )}
              </ErrorMessage>
            </>
          )}
        </Field>
      </Form.Group>
    );
  } else if (type === "textarea") {
    return (
      <Form.Group className={containerClass} controlId={name}>
        {label ? (
          <Form.Label className={labelClassName}>{label}</Form.Label>
        ) : null}

        <Field name={name}>
          {({ field, form: { touched, errors }, meta }) => (
            <div>
              <Form.Control
                type={type}
                placeholder={placeholder}
                className={className}
                isInvalid={touched[name] && errors[name] ? true : false}
                as={"textarea"}
                rows={5}
                {...field}
                autoComplete={name}
              />
              <ErrorMessage name={name}>
                {(msg) => (
                  <Form.Control.Feedback type="invalid">
                    {msg}
                  </Form.Control.Feedback>
                )}
              </ErrorMessage>
            </div>
          )}
        </Field>
      </Form.Group>
    );
  } else {
    return (
      <Form.Group className={containerClass} controlId={name}>
        {label ? (
          <Form.Label className={labelClassName}>{label}</Form.Label>
        ) : null}

        <Field name={name}>
          {({ field, form: { touched, errors }, meta }) => (
            <div>
              <Form.Control
                type={type}
                placeholder={placeholder}
                className={className}
                isInvalid={touched[name] && errors[name] ? true : false}
                {...field}
                autoComplete={name}
              />
              <ErrorMessage name={name}>
                {(msg) => (
                  <Form.Control.Feedback type="invalid">
                    {msg}
                  </Form.Control.Feedback>
                )}
              </ErrorMessage>
            </div>
          )}
        </Field>
      </Form.Group>
    );
  }
};

export default FormInput;
