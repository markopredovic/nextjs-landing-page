import React from "react";
import Head from "next/head";
import { Form, Button, Container } from "react-bootstrap";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";

import Layout from "../components/UI/Layout";

const initialValues = {
  fullName: "",
  initialInvestment: 0,
  investmentRisk: [],
  commentAboutInvestmentRisk: "",
  dependents: -1,
  acceptedTermsAndConditions: false,
};

const schema = yup.object({
  fullName: yup
    .string()
    .required("Required")
    .min(2, "Too short")
    .max(100, "To long"),
  initialInvestment: yup.number().required().min(100),
  dependents: yup.number().required().min(1),
  acceptedTermsAndConditions: yup.boolean().oneOf([true]),
  investmentRisk: yup
    .array(yup.string().oneOf(["High", "Medium", "Low"]))
    .min(1),
  commentAboutInvestmentRisk: yup.mixed().when("investmentRisk", {
    is: (investmentRisk) => investmentRisk.find((item) => item === "High"),
    then: yup.string().required().min(20).max(100),
    otherwise: yup.string().min(20).max(100),
  }),
});

const FormikPage = () => {
  return (
    <Layout>
      <Head>
        <title>Homepage</title>
      </Head>
      <Container className="py-4">
        <h1>Formik testing</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values, { setSubmitting }) => {
            console.log("handle submit", setSubmitting);

            // set isSubmitting
            // async call
            await axios.get("https://jsonplaceholder.typicode.com/todos/1");
            setSubmitting(false);
            // set isSubmiting false
          }}
          validationSchema={schema}
        >
          {({
            values,
            handleChange,
            handleSubmit,
            handleBlur,
            errors,
            touched,
            isSubmitting,
            isValidating,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group controlId="formik.fullname">
                <Form.Label>Full name</Form.Label>
                <Form.Control
                  type="text"
                  name="fullName"
                  value={values.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.fullName && !errors.fullName}
                />
                <ErrorMessage name="fullName" />
              </Form.Group>
              <Form.Group controlId="formik.initialInvestment">
                <Form.Label>Initial investment</Form.Label>
                <Form.Control
                  type="number"
                  name="initialInvestment"
                  value={values.initialInvestment}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  name="investmentRisk"
                  type="checkbox"
                  value="High"
                  label="High"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox2">
                <Form.Check
                  name="investmentRisk"
                  type="checkbox"
                  value="Medium"
                  label="Medium"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox3">
                <Form.Check
                  name="investmentRisk"
                  type="checkbox"
                  value="Low"
                  label="Low"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Comment About Investment Risk</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  name="commentAboutInvestmentRisk"
                  value={values.commentAboutInvestmentRisk}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Dependents</Form.Label>
                <Form.Control
                  as="select"
                  name="dependents"
                  value={values.dependents}
                  onChange={handleChange}
                >
                  <option value={-1}>Select ...</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formik.acceptedTermsAndConditions">
                <Form.Check
                  name="acceptedTermsAndConditions"
                  label="Accepted terms and conditions"
                  onChange={handleChange}
                />
              </Form.Group>
              <Button type="submit" disabled={isSubmitting || isValidating}>
                Submit form
              </Button>
              <pre>{JSON.stringify(errors, null, 4)}</pre>
            </Form>
          )}
        </Formik>
      </Container>
    </Layout>
  );
};

export default FormikPage;
