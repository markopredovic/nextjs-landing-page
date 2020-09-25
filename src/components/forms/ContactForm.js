import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  FormGroup,
  TextField,
  Button,
  Box,
  useTheme,
  Typography,
} from '@material-ui/core';
import styled from '@emotion/styled';

const FormGroupWrapper = styled(FormGroup)`
  margin-bottom: 2rem;
`;

const StyledError = styled.small(({ theme }) => ({
  color: theme.palette.error.main,
}));

const ContactForm = () => {
  const theme = useTheme();

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
    <Box>
      <Typography variant="h4" gutterBottom>
        Send us Email
      </Typography>
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
            <FormGroupWrapper>
              <TextField
                label="Full name"
                type="text"
                name="fullName"
                placeholder="Fullname"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                variant="outlined"
                size="small"
              />
              <ErrorMessage name="fullName">
                {(msg) => <StyledError theme={theme}>{msg}</StyledError>}
              </ErrorMessage>
            </FormGroupWrapper>
            <FormGroupWrapper>
              <TextField
                label="Email address"
                type="text"
                name="email"
                placeholder="Enter email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                variant="outlined"
                size="small"
              />
              <ErrorMessage name="email">
                {(msg) => <StyledError theme={theme}>{msg}</StyledError>}
              </ErrorMessage>
            </FormGroupWrapper>

            <FormGroupWrapper>
              <TextField
                label="Subject"
                type="text"
                name="subject"
                placeholder="Subject"
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                variant="outlined"
                size="small"
              />
              <ErrorMessage name="subject">
                {(msg) => <StyledError theme={theme}>{msg}</StyledError>}
              </ErrorMessage>
            </FormGroupWrapper>
            <FormGroupWrapper>
              <TextField
                label="Message"
                type="text"
                multiline
                rows="5"
                name="message"
                placeholder="Message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                variant="outlined"
                size="small"
              />
              <ErrorMessage name="message">
                {(msg) => <StyledError theme={theme}>{msg}</StyledError>}
              </ErrorMessage>
            </FormGroupWrapper>

            <Box display="flex" justifyContent="flex-end">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default ContactForm;
