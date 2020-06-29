import React from "react";
import PropTypes from "prop-types";
import { SWRConfig } from "swr";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../css/custom.css";
import "swiper/css/swiper.css";

import axiosInstance from "../axiosInstance";

export default function App({ Component, pageProps }) {
  const fetcher = (url) => axiosInstance.get(url).then((res) => res.data);

  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}

App.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.any,
};
