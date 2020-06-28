import React from "react";
import PropTypes from "prop-types";

const About = ({ about }) => {
  return (
    <div id="about" className="mb-5 d-sm-flex">
      <div className="mb-4">
        <img
          className="d-block w-100"
          src={about.image.url}
          alt={about.title}
        />
      </div>
      <div>
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
