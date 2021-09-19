import React from 'react';
import styles from './layouts.module.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

function Header() {
  return (
    <>
      <Navbar bg="primary" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="text-white">
            People Search!
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
