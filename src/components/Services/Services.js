import React from "react";
import PropTypes from "prop-types";

const Services = ({ services }) => {
  return (
    <div id="services" className="mb-5">
      <h3 className="mb-4">{services.title}</h3>
      <div>
        {services.items.map((service) => (
          <div key={service.id} className="mb-4">
            <div className="mb-3">
              <img
                className="d-block w-100"
                src={service.image.url}
                alt={service.title}
              />
            </div>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

Services.propTypes = {
  services: PropTypes.object,
};
