import React from "react";
import PropTypes from "prop-types";
import Swiper from "react-id-swiper";

const Testimonials = ({ testimonials }) => {
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
    <div id="testimonials" className="mb-5">
      <h3 className="mb-4">{testimonials.title}</h3>
      <Swiper {...params}>
        {testimonials.items.map((testimonial) => (
          <div key={testimonial.id} className="mb-4">
            <h4>{testimonial.author}</h4>
            <span className="d-block mb-2">{testimonial.position}</span>
            <p>{testimonial.description}</p>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;

Testimonials.propTypes = {
  testimonials: PropTypes.object,
};
