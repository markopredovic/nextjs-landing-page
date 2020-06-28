import React from "react";
import PropTypes from "prop-types";
import useMedia from "use-media";
import { Carousel } from "react-bootstrap";

import classes from "./services.module.css";

const Services = ({ services }) => {
  const isMobile = useMedia({ maxWidth: "767px" });

  return (
    <div id="services" className={`mb-5 ${classes.root}`}>
      <h3 className="mb-4">{services.title}</h3>
      {isMobile ? (
        <Carousel>
          {services.items.map((service) => (
            <Carousel.Item key={service.id}>
              <img
                className={`d-block w-100 ${classes.serviceImg}`}
                src={service.image.url}
                alt={service.title}
              />
              <Carousel.Caption>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
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
      )}
    </div>
  );
};

export default Services;

Services.propTypes = {
  services: PropTypes.object,
};
