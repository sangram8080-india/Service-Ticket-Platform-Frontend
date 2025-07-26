import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../Images/hero-image.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../Styles/HomePage.css";
import Footer from "../Components/Footer";
import SideNav from "../Components/SideNav";
export default function Home() {
  return (
    <>
      <SideNav />
      <div className="homepage">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="mb-4">
                <i className="bi bi-robot display-3 text-purple"></i>
              </div>
              <h1 className="display-4 fw-bold">
                <span className="text-gradient-orange">Resolve</span> Smarter.
                <br />
                <span className="text-gradient-orange">Track</span> Faster.
                <br />
                <span className="text-gradient-orange">Serve</span> Better.
              </h1>
              <p className="lead mt-3">
                Experience the future of service management with AI-powered
                automation, real-time tracking, and{" "}
                <span className="text-warning">intelligent</span> insights.
              </p>
              <div className="mt-4">
                <Link
                  to="/signup"
                  className="btn bg-gradient-orange btn-lg me-3"
                >
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-outline-dark btn-lg">
                  Login
                </Link>
              </div>
              <div className="row mt-5 text-center">
                <div className="col-6 col-md-3">
                  <h4>1M+</h4>
                  <p className="hero-metric">Tickets Resolved</p>
                </div>
                <div className="col-6 col-md-3">
                  <h4>50K+</h4>
                  <p className="hero-metric">Active Users</p>
                </div>
                <div className="col-6 col-md-3">
                  <h4>99.9%</h4>
                  <p className="hero-metric">Uptime</p>
                </div>
                <div className="col-6 col-md-3">
                  <h4>4.9★</h4>
                  <p className="hero-metric">User Rating</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-center">
        
              <img
                src={heroImage}
                alt="AI Service Management"
                className="hero-img img-fluid rounded shadow"
                style={{ maxHeight: "410px", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>

        {/* --------------2nd section------------------------- */}
        {/* Goals Section */}
        <section className="goals-section py-5">
          <Container>
            <div className="text-center mb-5">
              <h1 className="display-5 fw-bold text-dark">Align your goals.</h1>
              <p className="fs-4 text-muted">IMPROVE YOUR ROI.</p>
            </div>

            <Row className="g-4">
              <Col md={6}>
                <div className="goals-card p-4 h-100">
                  <h3 className="fw-bold mb-3">
                    Reduce 60% response time to your ticketing
                  </h3>
                  <p className="text-muted mb-0">
                    Streamline your support process with automated workflows and
                    smart routing.
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="goals-card p-4 h-100">
                  <h3 className="fw-bold mb-3">
                    Achieve help desk excellence & create value for customers
                  </h3>
                  <p className="text-muted mb-0">
                    Deliver exceptional customer experiences with our advanced
                    tools.
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="goals-card p-4 h-100">
                  <h4 className="fw-bold mb-3">
                    Level your way with a smart help desk solution
                  </h4>
                  <p className="text-muted mb-0">
                    Seek your support operations efficiently with our
                    comprehensive platform.
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="goals-card p-4 h-100">
                  <h3 className="fw-bold mb-3">
                    Take your business ahead system in all forms
                  </h3>
                  <p className="text-muted mb-0">
                    Future-pivot your support operations with cutting-edge
                    technology.
                  </p>
                </div>
              </Col>
            </Row>

            <div className="text-center mt-5">
              <Button variant="primary" size="lg" className="me-3 px-4 fw-bold">
                Contact Sales
              </Button>
              <Button
                variant="outline-primary"
                size="lg"
                className="px-4 fw-bold"
              >
                Get Started
              </Button>
            </div>
          </Container>
        </section>

        {/* --------third section--------------- */}
        <div className="helpdesk-section py-5 text-center">
          <Container>
            <h2 className="fw-bold mb-5">
              Help Desk Software for today’s <br /> fast-changing global
              businesses
            </h2>
            <Row className="g-4 justify-content-center">
              <Col md={5}>
                <div className="feature-card bg-blue text-start p-4 rounded border border-primary-subtle">
                  <h5 className="text-primary fw-bold">Bug Tracking</h5>
                  <p className="mb-0">
                    Track and resolve software bugs efficiently with detailed
                    reporting and priority management.
                  </p>
                </div>
              </Col>
              <Col md={5}>
                <div className="feature-card bg-green text-start p-4 rounded border border-success-subtle">
                  <h5 className="text-success fw-bold">For E-commerce</h5>
                  <p className="mb-0">
                    Handle customer inquiries, order issues, and returns with
                    specialized e-commerce workflows.
                  </p>
                </div>
              </Col>
              <Col md={5}>
                <div className="feature-card bg-purple text-start p-4 rounded border border-purple-subtle">
                  <h5 className="text-purple fw-bold">For SaaS & Startups</h5>
                  <p className="mb-0">
                    Scale your customer support as you grow with flexible,
                    startup-friendly solutions.
                  </p>
                </div>
              </Col>
              <Col md={5}>
                <div className="feature-card bg-orange-light text-start p-4 rounded border border-warning-subtle">
                  <h5 className="text-orange fw-bold">For Agencies</h5>
                  <p className="mb-0">
                    Manage multiple client support channels and maintain high
                    service standards across accounts.
                  </p>
                </div>
              </Col>
            </Row>

            <Button
              as={Link}
              to="/Login"
              className="mt-5 px-4 py-2 fw-semibold bg-orange border-0 rounded shadow-sm"
            >
              Get Started
            </Button>
          </Container>
        </div>
      </div>
      {/* ----------------------------------------------------------- */}

      {/* --------------------------------- */}
      {/* footer  */}
      <Footer />
    </>
  );
}
