import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useTheme } from '@material-ui/styles';
import { Box, Typography } from '@material-ui/core';
import Swiper from 'react-id-swiper';

const BannerBox = styled(Box)`
  position: relative;
  height: 60vh;

  img {
    display: block;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media (min-width: 600px) {
    height: 400px;
  }

  @media (min-width: 960px) {
    height: 450px;
  }

  @media (min-width: 1280px) {
    height: 500px;
  }

  @media (min-width: 1920px) {
    height: 600px;
  }
`;

const ContentBox = styled(Box)`
  position: absolute;
  padding: 1rem 2rem;
  width: 80%;
  left: 10%;
  bottom: 12%;
  text-align: center;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);

  h4 {
    margin-bottom: 1rem;
    font-weight: 600;
  }

  @media (min-width: 1280px) {
    width: 60%;
    left: 20%;
  }
  @media (min-width: 1920px) {
    width: 50%;
    left: 25%;
  }
`;

export const SwiperWrapper = styled(Box)(({ theme }) => ({
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

const Banners = ({ banner }) => {
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
  };

  const bannerItems = banner.map((item) => (
    <BannerBox key={item.id}>
      <img data-src={item.image.url} alt={item.title} className="swiper-lazy" />
      <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
      <ContentBox>
        <Typography variant="h4">{item.title}</Typography>
        <Typography variant="subtitle1">{item.description}</Typography>
      </ContentBox>
    </BannerBox>
  ));

  return (
    <SwiperWrapper theme={theme}>
      <Swiper {...params} className="nesto">
        {bannerItems}
      </Swiper>
    </SwiperWrapper>
  );
};

export default Banners;

Banners.propTypes = {
  banner: PropTypes.array,
};
