




import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Button, Dropdown, Image } from "react-bootstrap";
import { FaBell, FaPlus, FaChevronDown } from "react-icons/fa";
import "../Styles/CustomNavbar.css";

const CustomNavbar = () => (
  <Navbar expand="lg" sticky="top" className="custom-navbar shadow-sm py-2">
    <Container fluid className="px-4">
      {/* Logo */}
      <Navbar.Brand href="/" className="d-flex align-items-center logo-brand">
        <span className="logo-icon me-2 animate-pop">🎟️</span>
        <span className="brand-text">ServiceHub</span>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbar-content" className="navbar-light-toggler" />

      <Navbar.Collapse id="navbar-content" className="justify-content-end">
        <Nav className="align-items-center gap-3">
          <Nav.Link href="/" className="nav-link-custom">Home</Nav.Link>
          <Nav.Link href="/" className="nav-link-custom">About Us</Nav.Link>
          <Nav.Link href="/employee-portal" className="nav-link-custom">Services</Nav.Link>
          <Dropdown>
            <Dropdown.Toggle variant="link" className="nav-link-custom dropdown-toggle-no-arrow">
              Tickets <FaChevronDown size={10} style={{ marginLeft: 4 }} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/Login">High priority</Dropdown.Item>
              <Dropdown.Item href="/login">Medium priority</Dropdown.Item>
              <Dropdown.Item href="/login">Low priority</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button href="/contactus" className="demo-btn ms-2 px-4">Contact Us</Button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default CustomNavbar;
