import React from "react";
import PropTypes from "prop-types";

const Testimonials = ({ testimonials }) => {
  return (
    <div id="testimonials" className="mb-5">
      <h3 className="mb-4">{testimonials.title}</h3>
      <div>
        {testimonials.items.map((testimonial) => (
          <div key={testimonial.id} className="mb-4">
            <h4>{testimonial.author}</h4>
            <span className="d-block mb-2">{testimonial.position}</span>
            <p>{testimonial.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

Testimonials.propTypes = {
  testimonials: PropTypes.object,
};
