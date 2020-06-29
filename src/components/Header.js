import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";

import { useSmoothScroll } from "../hooks/useSmoothScroll";

export default function Header() {
  useSmoothScroll();

  return (
    <header className="fixed-top">
      <Navbar bg="dark" variant="dark" expand="lg">
        <div className="container">
          <Link href="/" passHref>
            <Navbar.Brand>Next js/Strapi landing page</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Link href="/" passHref>
                <Nav.Link>Home</Nav.Link>
              </Link>
              <Link href="/#about" passHref>
                <Nav.Link>About</Nav.Link>
              </Link>
              <Link href="/#services" passHref>
                <Nav.Link>Servies</Nav.Link>
              </Link>
              <Link href="/#testimonials" passHref>
                <Nav.Link>Testimonials</Nav.Link>
              </Link>
              <Link href="/#contact" passHref>
                <Nav.Link>Contact</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
}
