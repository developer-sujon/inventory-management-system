//Exteral Lib Import
import React from "react";
import { Form, Formik } from "formik";

const VerticalForm = ({
  defaultValues,
  validationSchema,
  children,
  onSubmit,
  formClass,
}) => {
  return (
    <Formik
      enableReinitialize
      initialValues={defaultValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        onSubmit(values);
      }}
    >
      {(props) => (
        <Form className={formClass} noValidate>
          {children}
        </Form>
      )}
    </Formik>
  );
};

export default VerticalForm;
