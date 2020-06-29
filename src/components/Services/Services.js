import React from "react";
import PropTypes from "prop-types";
import useMedia from "use-media";
import Swiper from "react-id-swiper";

import classes from "./services.module.css";

const Services = ({ services }) => {
  const isMobile = useMedia({ maxWidth: "767px" });

  const params = {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 30,
    breakpoints: {
      1199: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  };

  return (
    <div id="services" className={`mb-5 ${classes.root}`}>
      <h3 className="mb-4">{services.title}</h3>
      <Swiper {...params}>
        {services.items.map((service) => (
          <div key={service.id} className="pb-3">
            <div className="mb-3">
              <img
                className={`d-block w-100 ${classes.serviceImg}`}
                src={service.image.url}
                alt={service.title}
              />
            </div>
            <div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default Services;

Services.propTypes = {
  services: PropTypes.object,
};
