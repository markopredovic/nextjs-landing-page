import React, { useState } from 'react';
import Link from 'next/link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styled from '@emotion/styled';

import { List, ListItem, SwipeableDrawer } from '@material-ui/core';

import { useSmoothScroll } from '../hooks/useSmoothScroll';

const MobileList = styled(List)`
  width: 100%;
  min-width: 300px;
`;

export default function Header() {
  const [opened, setOpened] = useState(false);

  useSmoothScroll();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => setOpened(!opened)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Nextjs/Strapi/Material UI</Typography>

        <SwipeableDrawer
          open={opened}
          onClose={() => setOpened(false)}
          onOpen={() => setOpened(true)}
        >
          <MobileList component="nav" aria-label="main">
            <ListItem>
              <Link href="/" passHref>
                <a>Home</a>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/#about" passHref>
                <a>About</a>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/#services" passHref>
                <a>Services</a>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/#testimonials" passHref>
                <a>Testimonials</a>
              </Link>
            </ListItem>{' '}
            <ListItem>
              <Link href="/#contact" passHref>
                <a>Contact</a>
              </Link>
            </ListItem>
          </MobileList>
        </SwipeableDrawer>
      </Toolbar>
    </AppBar>
  );
}
