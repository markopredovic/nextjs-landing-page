import React, { Fragment } from "react";
import PropTypes from "prop-types";

import classes from "./layout.module.css";
import Header from "../../Header";
import Footer from "../../Footer";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main className={classes.mainLayout}>{children}</main>
      <Footer />
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
