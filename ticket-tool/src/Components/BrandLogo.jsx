


import React from "react";
import { Navbar, Image } from "react-bootstrap";
import "../Styles/BrandLogo.css";

const BrandLogo = () => {
  return (
    <Navbar.Brand href="/" className="d-flex align-items-center brand-logo">
   <img src="/logo.png" alt="ServiceHub Logo" className="brand-logo-icon me-2" />


      <span className="brand-name">ServiceHub</span>
    </Navbar.Brand>
  );
};

export default BrandLogo;
