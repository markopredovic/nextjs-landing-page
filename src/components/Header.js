import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Box, Collapse } from '@material-ui/core';

import Menu from './Menu';

import { useSmoothScroll } from '../hooks/useSmoothScroll';

export default function Header() {
  const [opened, setOpened] = useState(false);

  useSmoothScroll();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box mr="auto">
          <Typography variant="h6">Nextjs/Strapi/Material UI</Typography>
        </Box>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={() => setOpened(!opened)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Collapse in={opened}>
        <Menu />
      </Collapse>
    </AppBar>
  );
}
