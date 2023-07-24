import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "../styles/RegisterForm.css"; // Import the CSS file for the styles

const RegisterForm = (props) => {
  const handleFormSubmit = (values, { setSubmitting }) => {
    console.log(values.email);
    setSubmitting(false);
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  return (
    <div className="auth-form-container Register">
      <h2>Register</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
        validateOnBlur={true} // Enable validation on blur
        validateOnChange={false} // Disable validation on change
      >
        {({ isSubmitting }) => (
          <Form className="register-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" placeholder="Name" />
              <ErrorMessage
                name="name"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="youremail@gmail.com"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="********"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="error-message"
              />
            </div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
      <Link to="/" className="link-btn">
        Already have an account?
      </Link>
    </div>
  );
};

export default RegisterForm;
