//Exteral Lib Import
import React from "react";
import { Field, Form, Formik, FormikProps } from "formik";

const VerticalForm = ({
  defaultValues,
  resolver,
  children,
  onSubmit,
  formClass,
}) => {
  return (
    <Formik
      initialValues={defaultValues}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props: FormikProps<any>) => (
        <Form className={formClass} noValidate>
          {children}
        </Form>
      )}
    </Formik>
  );
};

export default VerticalForm;
