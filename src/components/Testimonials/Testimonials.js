import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, useTheme } from '@material-ui/core';
import styled from '@emotion/styled';
import Swiper from 'react-id-swiper';
import SectionTitle from '../shared/SectionTitle';

const WrapperBox = styled(Box)(({ theme }) => ({
  '.swiper-pagination': {
    padding: '1rem 0',
    position: 'static',
  },

  '.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet': {
    margin: '0 10px',
  },

  '.swiper-button-next': { display: 'none' },
  '.swiper-button-prev': { display: 'none' },

  '.swiper-pagination-bullet': {
    width: '1.8rem',
    height: '1.8rem',
    background: `${theme.palette.primary.main}`,
    opacity: '.5',
  },

  '.swiper-pagination-bullet-active': {
    opacity: '1',
  },

  '@media only screen and (min-width: 768px)': {
    '.swiper-button-next': { display: 'initial' },
    '.swiper-button-prev': { display: 'initial' },
  },
}));

const TestimonialBox = styled(Box)`
  span {
    display: inline-block;
    margin-bottom: 1rem;
  }
`;

const Testimonials = ({ testimonials }) => {
  const theme = useTheme();

  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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
    <WrapperBox id="testimonials" theme={theme}>
      <Box mb={4} textAlign="center">
        <SectionTitle>{testimonials.title}</SectionTitle>
      </Box>
      <Swiper {...params}>
        {testimonials.items.map((testimonial) => (
          <TestimonialBox key={testimonial.id} textAlign="center">
            <Typography variant="h4" gutterBottom>
              {testimonial.author}
            </Typography>
            <Typography variant="body2" component="span" gutterBottom>
              {testimonial.position}
            </Typography>
            <Typography variant="body1">{testimonial.description}</Typography>
          </TestimonialBox>
        ))}
      </Swiper>
    </WrapperBox>
  );
};

export default Testimonials;

Testimonials.propTypes = {
  testimonials: PropTypes.object,
};
