import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AboutUsChatbot from '../Components/AboutUsChatBot';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from '../Components/CustomNavbar';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

const AboutUsPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-us-page">
      <CustomNavbar />
      
      {/* Hero Section */}
      <section className="hero-section py-5" style={{ backgroundColor: 'rgb(31 41 55)', color: 'white' }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className="display-4 fw-bold mb-4">Optimize Your
Workflow with
Advanced Help Desk
Management Software</h1>
              <p className="lead mb-4">
         Streamline your support operations with our comprehensive platform designed for modern teams. Manage tickets, collaborate effectively, and deliver exceptional customer service.
              </p>
              <div className="d-flex gap-3">
                <Link to="/services">
                  <Button variant="warning" size="lg" className="px-4">
                    Explore Services
                  </Button>
                </Link>
                <Link to="/login">
                  <Button variant="outline-light" size="lg" className="px-4">
                    Login / Signup
                  </Button>
                </Link>
              </div>
            </Col>
            <Col lg={6} className="mt-5 mt-lg-0">
              <AboutUsChatbot />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Optional Animated Feature Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col md={8} className="text-center">
              <h2 className="fw-bold mb-3">Why Choose Our Platform?</h2>
              <p className="lead">Discover the difference with our cutting-edge features</p>
            </Col>
          </Row>
          <Row>
            {[
              {
                title: "Fast Responses",
                description: "Timely replies to your queries by our expert team.",
                icon: "🤖"
              },
              {
                title: "Top-rated Service",
                description: "Delivering exceptional service rated highly by customers.",
                icon: "📊"
              },
              {
                title: "Trusted by Thousands",
                description: "Our platform is embraced by thousands of satisfied users.",
                icon: "🔌"
              }
            ].map((feature, index) => (
              <Col md={4} key={index} className="mb-4">
                <div 
                  className="p-4 h-100 bg-white rounded shadow-sm text-center"
                  style={{
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer',
                    ':hover': {
                      transform: 'translateY(-5px)'
                    }
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = ''}
                >
                  <div className="display-4 mb-3">{feature.icon}</div>
                  <h4 className="mb-3">{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUsPage;