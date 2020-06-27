import React from "react";
import PropTypes from "prop-types";

import ContactForm from "../forms/ContactForm";

const Contact = ({ contact }) => {
  return (
    <div id="#contact" className="mb-5">
      <h3 className="mb-4">Contact us</h3>
      <div className="mb-4">
        <p>{contact.info}</p>
        <p>{contact.address}</p>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;

Contact.propTypes = {
  contact: PropTypes.object,
};
