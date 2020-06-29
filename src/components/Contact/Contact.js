import React from "react";
import PropTypes from "prop-types";

import ContactForm from "../forms/ContactForm";

const Contact = ({ contact }) => {
  return (
    <div id="contact" className="mb-5 d-md-flex flex-md-wrap row">
      <h3 className="mb-4 w-100 col-12">Contact us</h3>
      <div className="mb-4 col-md-6">
        <h4 className="mb-4">Contact info</h4>
        <p>{contact.info}</p>
        <p>{contact.address}</p>
      </div>
      <div className="col-md-6">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;

Contact.propTypes = {
  contact: PropTypes.object,
};
