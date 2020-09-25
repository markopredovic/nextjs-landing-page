import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, useTheme } from '@material-ui/core';
import styled from '@emotion/styled';

import SectionTitle from '../shared/SectionTitle';

const ImageBox = styled(Box)`
  img {
    display: block;
    width: 100%;
  }
`;

const ContentBox = styled(Box)`
  text-align: center;
  h3 {
    margin-bottom: 1.5rem;
  }
`;

const About = ({ about }) => {
  const theme = useTheme();

  return (
    <Box id="about" display="flex" flexDirection={{ xs: 'column', md: 'row' }}>
      <ImageBox
        mb={{ xs: theme.spacing(1) / 2, md: '0' }}
        width={{ md: '45%' }}
        mr={{ md: '5%' }}
      >
        <img src={about.image.url} alt={about.title} />
      </ImageBox>
      <ContentBox width={{ md: '50%' }}>
        <SectionTitle variant="h3">{about.title}</SectionTitle>
        <Typography variant="body1">{about.description}</Typography>
      </ContentBox>
    </Box>
  );
};

export default About;

About.propTypes = {
  about: PropTypes.object,
};
