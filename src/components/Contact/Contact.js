import React from 'react';
import PropTypes from 'prop-types';

import ContactForm from '../forms/ContactForm';
import { Box, Typography } from '@material-ui/core';
import SectionTitle from '../shared/SectionTitle';

const Contact = ({ contact }) => {
  return (
    <Box id="contact">
      <Box mb={4} textAlign="center">
        <SectionTitle>Contact us</SectionTitle>
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', lg: 'row' }}
        justifyContent="space-between"
      >
        <Box mb={4} width={{ xs: '100%', lg: '45%' }}>
          <Typography variant="h4" gutterBottom>
            Contact info
          </Typography>
          <Typography variant="body1" gutterBottom>
            {contact.info}
          </Typography>
          <Typography variant="body1">{contact.address}</Typography>
        </Box>
        <Box width={{ xs: '100%', lg: '50%' }}>
          <ContactForm />
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;

Contact.propTypes = {
  contact: PropTypes.object,
};
