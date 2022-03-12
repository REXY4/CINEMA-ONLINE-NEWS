/* eslint-disable max-len */
import React from 'react';
import {Navbar, Container, Nav, Button, Image} from 'react-bootstrap';
import '../../styles/navbars/navbars.css';
import logo from '../../assets/Icon.svg';

const NavbarComponents = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark"
      style={{
        backgroundColor: '#151515',
      }}>
      <Container fluid style={{
        paddingLeft: '50px',
        paddingRight: '50px',
      }}>
        <Navbar.Brand href="#home">
          <Image src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#" id="button-login">Login</Nav.Link>
            <Button variant='danger' id="button-register">Register</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponents;
