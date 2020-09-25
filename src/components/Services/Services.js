import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Swiper from 'react-id-swiper';
import { Box, Typography, useTheme } from '@material-ui/core';
import SectionTitle from '../shared/SectionTitle';
import { SwiperWrapper } from '../Banners';

const ServiceBox = styled(Box)`
  height: 350px;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const ContentBox = styled(Box)`
  text-align: center;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Services = ({ services }) => {
  const theme = useTheme();

  const params = {
    lazy: true,
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
    <SwiperWrapper id="services" theme={theme}>
      <Box mb={4} textAlign="center">
        <SectionTitle>{services.title}</SectionTitle>
      </Box>
      <Swiper {...params}>
        {services.items.map((service) => (
          <ServiceBox key={service.id} position="relative">
            <img
              src="/blur.jpg"
              data-src={service.image.url}
              alt={service.title}
              className="swiper-lazy"
            />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
            <ContentBox
              position="absolute"
              bottom="10%"
              left="10%"
              width="80%"
              px={2}
              py={1}
            >
              <Typography variant="h4" gutterBottom>
                {service.title}
              </Typography>
              <Typography variant="subtitle1">{service.description}</Typography>
            </ContentBox>
          </ServiceBox>
        ))}
      </Swiper>
    </SwiperWrapper>
  );
};

export default Services;

Services.propTypes = {
  services: PropTypes.object,
};
