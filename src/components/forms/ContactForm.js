import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { FormGroup, TextField, Button } from '@material-ui/core';

const ContactForm = () => {
  const initialValues = {
    fullName: '',
    email: '',
    subject: '',
    message: '',
  };

  const schema = yup.object({
    fullName: yup
      .string()
      .required('Required')
      .min(2, 'Too short')
      .max(100, 'To long'),
    email: yup.string().email('Must be valid email').required(),
    subject: yup.string(),
    message: yup.string().required('Required').min(20, 'To short'),
  });

  return (
    <div>
      <h4 className="mb-4">Send us Email</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 4));
            setSubmitting(false);
          }, 3000);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          handleBlur,
          isSubmitting,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            <FormGroup controlId="contact.fullName">
              <TextField
                label="Full name"
                type="text"
                name="fullName"
                placeholder="Fullname"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.fullName && !errors.fullName}
              />
              <ErrorMessage name="fullName">
                {(msg) => <small className="text-danger">{msg}</small>}
              </ErrorMessage>
            </FormGroup>
            <FormGroup controlId="contact.email">
              <TextField
                label="Email address"
                type="text"
                name="email"
                placeholder="Enter email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.email && !errors.email}
              />
              <ErrorMessage name="email">
                {(msg) => <small className="text-danger">{msg}</small>}
              </ErrorMessage>
            </FormGroup>

            <FormGroup controlId="contact.subject">
              <TextField
                label="Subject"
                type="text"
                name="subject"
                placeholder="Subject"
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.subject && !errors.subject}
              />
              <ErrorMessage name="subject">
                {(msg) => <small className="text-danger">{msg}</small>}
              </ErrorMessage>
            </FormGroup>
            <FormGroup controlId="contact.message">
              <TextField
                label="Message"
                as="textarea"
                rows="5"
                name="message"
                placeholder="Message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.message && !errors.message}
              />
              <ErrorMessage name="message">
                {(msg) => <small className="text-danger">{msg}</small>}
              </ErrorMessage>
            </FormGroup>

            <Button variant="primary" type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
