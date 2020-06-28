import React from "react";
import PropTypes from "prop-types";

import classes from "./about.module.css";

const About = ({ about }) => {
  return (
    <div id="about" className="mb-5 d-md-flex row">
      <div className="mb-4 mb-md-0 col-sm-5 col-md-6 col-lg-7">
        <img
          className="d-block w-100"
          src={about.image.url}
          alt={about.title}
        />
      </div>
      <div className="col-sm-7 col-md-6 col-lg-5">
        <h3>{about.title}</h3>
        <p>{about.description}</p>
      </div>
    </div>
  );
};

export default About;

About.propTypes = {
  about: PropTypes.object,
};
