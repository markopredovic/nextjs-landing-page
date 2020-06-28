import React from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-bootstrap";
import getConfig from "next/config";

import classes from "./banners.module.css";

const { publicRuntimeConfig } = getConfig();

const Banners = ({ banner }) => {
  const bannerItems = banner.map((item) => (
    <Carousel.Item key={item.id}>
      <img
        className={`d-block w-100 ${classes.bannerImg}`}
        src={item.image.url}
        alt={item.title}
      />
      <Carousel.Caption>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </Carousel.Caption>
    </Carousel.Item>
  ));

  return (
    <div className="mb-5">
      <Carousel>{bannerItems}</Carousel>
    </div>
  );
};

export default Banners;

Banners.propTypes = {
  banner: PropTypes.array,
};
