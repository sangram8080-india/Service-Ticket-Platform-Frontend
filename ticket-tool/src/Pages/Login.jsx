import React, { useState } from "react";
import {
  Col,
  Card,
  Form,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/LoginPage.css"; 
import RegisterImage from "../Images/1.png";
const Login = () => {
  const [emailOrEmpId, setEmailOrEmpId] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("User");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // backend login endpoint here
  const API_URL = "https://your-domain.com/api/login";

  // Add Google login logic here
  const handleGoogleLogin = () => {
    alert("Google Sign-in Clicked (to be implemented)");
  };

  // Handle role switching and clear fields/error
  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    setEmailOrEmpId("");
    setPassword("");
    setError("");
  };

  // Actual form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!emailOrEmpId || !password) {
      setError(
        role === "User"
          ? "Please enter both email and password"
          : "Please enter both Employee ID and password"
      );
      return;
    }

    setIsLoading(true);

    try {
      const body = {
        login: emailOrEmpId,
        password,
        role,
      };

      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Login failed. Please try again.");
        setIsLoading(false);
        return;
      }

      // Store token/role for authentication in future requests/pages
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      // Redirect based on user role
      if (data.role === "Admin") {
        window.location.href = "/admin-panel";
      } else if (data.role === "Employee") {
        window.location.href = "/employee-portal";
      } else {
        window.location.href = "/dashboard";
      }
    } catch (err) {
      setError("Server error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page-container d-flex flex-column flex-md-row min-vh-100">
      {/* Left Side Visual */}
      <Col
        md={6}
        className="d-flex align-items-center justify-content-center bg-text-gradient-blue text-white flex-column p-5 left-sidebar"
      >
        <div className="text-center">
          <img src={RegisterImage} alt="Help Desk Illustration" className="img-fluid mb-4 sidebar-image" style={{ maxWidth: "250px" }} />
          <h2 className="fw-bold mb-3">The Best Help Desk Software</h2>
          <p>Unlimited agents, fantastic support, easy to use!</p>
          <a href="/" className="btn btn-outline-light mt-4">
            ← Back to Home
          </a>
        </div>
      </Col>

      {/* Right Side: Login Form */}
      <div className="login-form-panel d-flex align-items-center justify-content-center p-4 bg-white w-100">
        <div style={{ maxWidth: "400px", width: "100%" }}>
          <Card className="login-card">
            <Card.Body className="p-4">
              <div className="text-center mb-4">
                <h2 className="fw-bold mb-2">Welcome Back</h2>
                <p className="text-muted">Sign in to your account</p>
              </div>
              {/* Role Selection */}
              <div className="role-selection mb-4">
                <h6 className="mb-3 text-center">I am a</h6>
                <div className="d-flex gap-3 justify-content-center">
                  <Button
                    variant={role === "User" ? "primary" : "outline-primary"}
                    onClick={() => handleRoleSelect("User")}
                    className={`role-btn ${role === "User" ? "active" : ""}`}
                    disabled={isLoading}
                  >
                    User
                  </Button>
                  <Button
                    variant={role === "Employee" ? "primary" : "outline-primary"}
                    onClick={() => handleRoleSelect("Employee")}
                    className={`role-btn ${role === "Employee" ? "active" : ""}`}
                    disabled={isLoading}
                  >
                    Employee
                  </Button>
                  <Button
                    variant={role === "Admin" ? "primary" : "outline-primary"}
                    onClick={() => handleRoleSelect("Admin")}
                    className={`role-btn ${role === "Admin" ? "active" : ""}`}
                    disabled={isLoading}
                  >
                    Admin
                  </Button>
                </div>
              </div>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>
                    {role === "User"
                      ? "Email Address"
                      : "Employee ID / Admin ID"}
                  </Form.Label>
                  <Form.Control
                    type={role === "User" ? "email" : "text"}
                    placeholder={
                      role === "User"
                        ? "Enter your email"
                        : "Enter your Employee or Admin ID"
                    }
                    value={emailOrEmpId}
                    onChange={e => setEmailOrEmpId(e.target.value)}
                    className="login-input"
                    disabled={isLoading}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="login-input"
                    disabled={isLoading}
                  />
                </Form.Group>

                {role === "User" && (
                  <div className="mb-3 d-flex justify-content-between">
                    <a href="/forgot-password" className="small text-primary">
                      Forgot Password?
                    </a>
                  </div>
                )}

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
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                    />
                  ) : (
                    "Sign In"
                  )}
                </Button>

                {/* Google Login only for User */}
                {role === "User" && (
                  <Button
                    variant="outline-danger"
                    className="w-100 mb-3"
                    onClick={handleGoogleLogin}
                    disabled={isLoading}
                    type="button"
                  >
                    <span style={{ marginRight: 8 }}>
                      <i className="fab fa-google"></i>
                    </span>
                    Sign in with Google
                  </Button>
                )}

                {role === "User" && (
                  <div className="text-center">
                    <p className="text-muted small mb-0">
                      Don't have an account?{" "}
                      <a href="/SignUp" className="text-primary">
                        Sign Up
                      </a>
                    </p>
                  </div>
                )}
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
