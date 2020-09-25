import { Box } from '@material-ui/core';
import React from 'react';
import styled from '@emotion/styled';

import Copyright from './Shared/Copyright';

const FooterBox = styled(Box)`
  background-color: #000;
  color: #fff;
`;

export default function Footer() {
  return (
    <FooterBox component="footer" py={2} textAlign="center">
      <Copyright />
    </FooterBox>
  );
}
