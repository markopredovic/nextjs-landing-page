import React from 'react';
import Link from 'next/link';
import { Box, List, ListItem } from '@material-ui/core';
import styled from '@emotion/styled';

const MenuWrapper = styled(Box)(({ isDesktop }) =>
  !isDesktop
    ? `nav {
    li a {
      display: block;
      width: 100%;
      text-align: center;
      color: #fff;
      text-decoration: none;
      font-size: 1.6rem;
      text-transform: uppercase;
      line-height: 1.8;
    }
  }
  `
    : `nav {
    display: flex;

    li a {
      color: #fff;
      text-decoration: none;
      font-size: 1.6rem;
      text-transform: uppercase;
      line-height: 1.8;
    }
  }
    @media (min-width: 1280px) {
    nav li a { font-size: 1.8rem; }
  }
  `
);

const Menu = ({ isDesktop }) => {
  console.log('is desktop', isDesktop);
  return (
    <MenuWrapper isDesktop={isDesktop}>
      <List component="nav" aria-label="main">
        <ListItem>
          <Link href="/" passHref>
            <a className="nav-link">Home</a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/#about" passHref>
            <a className="nav-link">About</a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/#services" passHref>
            <a className="nav-link">Services</a>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/#testimonials" passHref>
            <a className="nav-link">Testimonials</a>
          </Link>
        </ListItem>{' '}
        <ListItem>
          <Link href="/#contact" passHref>
            <a className="nav-link">Contact</a>
          </Link>
        </ListItem>
      </List>
    </MenuWrapper>
  );
};

export default Menu;
