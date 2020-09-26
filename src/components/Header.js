import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Box, Collapse, useMediaQuery } from '@material-ui/core';
import styled from '@emotion/styled';

import Menu from './Menu';

import { useSmoothScroll } from '../hooks/useSmoothScroll';

const StyledMenuIcon = styled(MenuIcon)`
  font-size: 3.4rem;
`;

export default function Header() {
  const isDesktop = useMediaQuery(`(min-width: 960px)`);

  const [opened, setOpened] = useState(false);

  useSmoothScroll();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box mr="auto">
          <Typography variant="h5" component="h1">
            Nextjs/Strapi/Material UI
          </Typography>
        </Box>
        {isDesktop ? (
          <Menu isDesktop={true} />
        ) : (
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => setOpened(!opened)}
          >
            <StyledMenuIcon />
          </IconButton>
        )}
      </Toolbar>
      {!isDesktop && (
        <Collapse in={opened}>
          <Menu isDesktop={false} />
        </Collapse>
      )}
    </AppBar>
  );
}
