import React from 'react';
import PropTypes from 'prop-types';
import { NextSeo } from 'next-seo';
import { Box, Container } from '@material-ui/core';

import axiosInstance from '../../axiosInstance';
import Layout from '../UI/Layout';
import Banners from '../Banners';
import About from '../About';
import Services from '../Services';
import Testimonials from '../Testimonials';
import Contact from '../Contact';

const HomePage = ({ homepage }) => {
  const {
    home_banner,
    home_about,
    home_services,
    home_testimonials,
    home_contact,
  } = homepage;

  return (
    <Layout>
      <NextSeo
        title="Landing page"
        description="Simple next js / strapi landing page."
      />
      <Box pb={10}>
        <Banners banner={home_banner.items} />
      </Box>
      <Container>
        <Box pb={10}>
          <About about={home_about} />
        </Box>
        <Box pb={10}>
          <Services services={home_services} />
        </Box>
        <Box pb={10}>
          <Testimonials testimonials={home_testimonials} />
        </Box>
        <Box pb={10}>
          <Contact contact={home_contact} />
        </Box>
      </Container>
    </Layout>
  );
};

export default HomePage;

export async function getStaticProps() {
  try {
    const res = await axiosInstance.get('/homepage');
    const homepage = res.data;
    return {
      props: {
        homepage,
      },
    };
  } catch (e) {
    console.log('e', e);
  }
}

HomePage.propTypes = {
  homepage: PropTypes.object,
};
