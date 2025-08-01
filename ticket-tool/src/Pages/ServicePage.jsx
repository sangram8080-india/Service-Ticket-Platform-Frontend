import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import CustomNavbar from "../Components/CustomNavbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export default function ServicePage() {
  // Theme colors
  const orange = "#F7941D";

  // Service items
  const services = [
    {
      icon: "bi bi-ticket-detailed-fill",
      title: "Smart Ticket Management",
      desc: "Automate, prioritize, and resolve tickets fast with powerful workflows and performance analytics.",
    },
    {
      icon: "bi bi-people-fill",
      title: "Team Collaboration",
      desc: "Empower your team with real-time chat and shared knowledge bases for seamless collaboration.",
    },
    {
      icon: "bi bi-bar-chart-fill",
      title: "Advanced Analytics",
      desc: "Gain insights into your support KPIs with real-time, customizable dashboards and reports.",
    },
  ];

  // Feature highlights
  const features = [
    "24/7 Customer Support",
    "Automated Responses",
    "Multi-Channel Integration",
    "Customizable Workflows",
  ];

  return (
    <div
      style={{
        background: "#F5F5F5",
        minHeight: "100vh",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <CustomNavbar />

      {/* Hero Section */}
      <section
        style={{
          background: `linear-gradient(100deg, #232323 60%, ${orange} 100%)`,
          color: "#FFF",
          minHeight: "40vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "3rem 1rem",
          borderRadius: "0 0 48px 48px",
          textAlign: "center",
        }}
      >
        <h1
          className="fw-bold"
          style={{ fontSize: "2.8rem", maxWidth: 600, lineHeight: 1.2 }}
        >
          Provide Exceptional{" "}
          <span style={{ color: orange }}>Customer Support</span>
          <br />
          Everyday.
        </h1>
        <p
          className="lead mt-3"
          style={{
            maxWidth: 500,
            color: "rgba(255, 255, 255, 0.85)",
            fontSize: "1.125rem",
          }}
        >
          Our comprehensive platform helps you deliver outstanding support
          experiences with advanced tools, analytics, and automation.
        </p>
      </section>

      {/* Our Services */}
      <section
        style={{ backgroundColor: "#fff", padding: "4rem 0", color: "#232323" }}
      >
        <div className="container text-center mb-5">
          <h2 style={{ color: orange, fontWeight: "700" }}>Our Services</h2>
          <p
            style={{
              maxWidth: 600,
              margin: "0.5rem auto 2rem auto",
              fontSize: "1.15rem",
              color: "#444",
            }}
          >
            Streamline your support with intelligent automation and modern
            teamwork tools.
          </p>
        </div>

        <div className="container">
          <div className="row g-4 justify-content-center">
            {services.map((svc, idx) => (
              <div className="col-12 col-md-4" key={svc.title}>
                <div
                  className="card h-100 text-center shadow-sm"
                  style={{
                    borderRadius: "1rem",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-6px) scale(1.02)";
                    e.currentTarget.style.boxShadow = `0 10px 25px rgba(247,148,29,0.3)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow =
                      "0 1px 6px rgba(0,0,0,0.1)";
                  }}
                  tabIndex={0}
                  aria-label={`Service: ${svc.title}`}
                >
                  <div className="card-body">
                    <i
                      className={svc.icon}
                      style={{
                        color: orange,
                        fontSize: "2.5rem",
                        marginBottom: "1rem",
                      }}
                      aria-hidden="true"
                    />
                    <h5 className="fw-semibold mb-2">{svc.title}</h5>
                    <p style={{ color: "#555" }}>{svc.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="my-5">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-md-6">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?fit=crop&w=600"
                alt="Support Team"
                className="img-fluid rounded shadow"
                style={{ border: `3px solid ${orange}`, maxWidth: "100%" }}
                loading="lazy"
              />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h3 style={{ color: orange }} className="fw-bold mb-3">
                Powerful Features
              </h3>
              <ul
                className="list-group list-group-flush mb-3"
                style={{ maxWidth: 400 }}
              >
                {features.map((f, i) => (
                  <li
                    key={f}
                    className="list-group-item border-0 ps-0 d-flex align-items-center"
                    style={{
                      background: "#fff",
                      color: "#444",
                      fontSize: "1rem",
                    }}
                  >
                    <i
                      className="bi bi-check-circle-fill text-success me-2"
                      aria-hidden="true"
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="text-secondary" style={{ maxWidth: 400 }}>
                Scale your business with tools designed for modern support
                teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-light rounded-4 py-5 mb-5 shadow-sm">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-8">
              <h3 className="fw-bold mb-3" style={{ color: "#232323" }}>
                Why Choose Us?
              </h3>
              <p
                className="text-muted mb-5"
                style={{ fontSize: "1.1rem", lineHeight: 1.5 }}
              >
                We help you build long-lasting customer relationships.
                <br />
                Gain efficiency, increase satisfaction, and grow your business
                with our support platform.
              </p>
              <div className="row">
                {[
                  {
                    icon: "bi-lightning-charge-fill",
                    color: "warning",
                    title: "Fast Responses",
                    description:
                      "Timely replies to your queries by our expert team.",
                  },
                  {
                    icon: "bi-star-fill",
                    color: "info",
                    title: "Top-rated Service",
                    description:
                      "Delivering exceptional service rated highly by customers.",
                  },
                  {
                    icon: "bi-person-fill-check",
                    color: "success",
                    title: "Trusted by Thousands",
                    description:
                      "Our platform is embraced by thousands of satisfied users.",
                  },
                ].map(({ icon, color, title, description }, idx) => (
                  <div key={title} className="col-md-4 mb-4">
                    <div
                      className="d-flex flex-column align-items-center px-3"
                      style={{
                        transition: "transform 0.3s, box-shadow 0.3s",
                        cursor: "default",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-8px)";
                        e.currentTarget.style.boxShadow =
                          "0 12px 20px rgba(0,0,0,0.12)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "none";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                      tabIndex={0}
                      aria-label={`Feature: ${title}`}
                    >
                      <div
                        className={`bi ${icon} fs-1 text-${color}`}
                        aria-hidden="true"
                        style={{ marginBottom: "1rem" }}
                      ></div>
                      <h5 className="fw-semibold mb-1">{title}</h5>
                      <p
                        className="text-muted small text-center"
                        style={{ maxWidth: 220 }}
                      >
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial/Call-to-Action Section */}
      <section
        style={{
          background: "#232B34",
          color: "#fff",
          padding: "4rem 1rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontWeight: 800,
            fontSize: "2rem",
            maxWidth: 700,
            margin: "0 auto 1rem auto",
            lineHeight: 1.3,
          }}
        >
          Thousands of great companies call
          <br />
          <span style={{ color: "#F7941D" }}>ServiceHub</span> for a great
          friend
        </h2>
        <p
          className="mb-4"
          style={{
            color: "#B9C5D2",
            maxWidth: 520,
            margin: "0 auto 2rem auto",
            fontSize: "1.08rem",
          }}
        >
          Join the growing community of businesses that trust ServiceHub to
          deliver exceptional customer support experiences.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <button
            className="btn btn-outline-light fw-bold px-4 py-2"
            style={{
              borderRadius: "1.5rem",
              borderWidth: 2,
              fontSize: "1rem",
            }}
          >
            Start 14-day trial
          </button>
          <Link to="/login">
            <button
              className="btn fw-bold px-4 py-2"
              style={{
                borderRadius: "1.5rem",
                background: "#F7941D",
                color: "#fff",
                border: "none",
                fontSize: "1rem",
              }}
            >
              Get Started
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
