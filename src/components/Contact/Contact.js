import React from 'react';
import PropTypes from 'prop-types';

import ContactForm from '../forms/ContactForm';

const Contact = ({ contact }) => {
  return (
    <div id="contact">
      <h3>Contact us</h3>
      <div>
        <h4>Contact info</h4>
        <p>{contact.info}</p>
        <p>{contact.address}</p>
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;

Contact.propTypes = {
  contact: PropTypes.object,
};
