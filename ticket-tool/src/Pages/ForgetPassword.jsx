import React, { useState } from "react";
import { Container, Form, Button, Card, Alert, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/LoginPage.css";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const API_URL = "https://perpetual-liberation-service-ticket.up.railway.app/api/forgot-password"; // api for the forgot password

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Please enter your registered email address.");
      return;
    }

    setIsLoading(true);

    try {
      await axios.post(
        API_URL,
        { email },
        { headers: { "Content-Type": "application/json" } }
      );
      setSubmitted(true);
    } catch (err) {
      setError(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page-container d-flex align-items-center justify-content-center min-vh-100 bg-white">
      <div style={{ maxWidth: "400px", width: "100%" }}>
        <Card className="login-card">
          <Card.Body className="p-4">
            <div className="text-center mb-4">
              <h2 className="fw-bold mb-2">Forgot Password</h2>
              <p className="text-muted">
                Enter your registered email address.
              </p>
            </div>

            {submitted ? (
              <Alert variant="success" className="text-center">
                If this email exists in our system, you'll receive password reset instructions soon.
              </Alert>
            ) : (
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    className="login-input"
                  />
                </Form.Group>

                {error && (
                  <Alert variant="danger" className="text-center py-2 mb-3">
                    <small>{error}</small>
                  </Alert>
                )}

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 py-2 mb-3 login-btn"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Spinner as="span" animation="border" size="sm" role="status" />
                  ) : (
                    "Send Reset Link"
                  )}
                </Button>
                <div className="text-center">
                  <a href="/login" className="text-primary small">Back to Login</a>
                </div>
              </Form>
            )}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ForgotPassword;
