import React from 'react';
import PropTypes from 'prop-types';
import { NextSeo } from 'next-seo';
import { Box, Container } from '@material-ui/core';
import useSWR from 'swr';

import axiosInstance from '../../axiosInstance';
import Layout from '../UI/Layout';
import Banners from '../Banners';
import About from '../About';
import Services from '../Services';
import Testimonials from '../Testimonials';
import Contact from '../Contact';

const HomePage = ({ homepage }) => {
  // swr get data
  const { data, error } = useSWR('/homepage', {
    initialData: homepage,
    revalidateOnFocus: false,
  });

  if (error) {
    return <div>Error...</div>;
  }
  if (!data) {
    return <div>Loading...</div>;
  }

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
      <Box pb={8}>
        <Banners banner={home_banner.items} />
      </Box>
      <Container>
        <Box pb={8}>
          <About about={home_about} />
        </Box>
        <Box pb={8}>
          <Services services={home_services} />
        </Box>
        <Box pb={8}>
          <Testimonials testimonials={home_testimonials} />
        </Box>
        {/*<Contact contact={home_contact} />*/}
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
