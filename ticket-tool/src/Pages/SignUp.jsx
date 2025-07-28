

import React, { useState } from 'react';
import { Form, Button, Card, Row, Col, Alert, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/SignUp.css'
import RegisterImage from "../Images/1.png";
const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [department, setDepartment] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      setLoading(true);
      const response = await axios.post('https://perpetual-liberation-service-ticket.up.railway.app/api/save', {
        fullName,
        email,
        phoneNumber,
        department,
        password,
        role: 'User',
      });
      localStorage.setItem('user', JSON.stringify(response.data));
      window.location.href = '/dashboard';
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Row className="m-0 vh-100">
{/* ------------------------------Left Side-------------------------------- */}
<Col
  md={6}
  className="d-flex align-items-center justify-content-center bg-text-gradient-blue text-white flex-column p-5 left-sidebar"
>
  <div className="text-center">
    <img
      src={RegisterImage}
      alt="Help Desk Illustration"
      className="img-fluid mb-4 sidebar-image"
      style={{ maxWidth: "250px" }}
    />

    <h2 className="fw-bold mb-3">The Best Help Desk Software</h2>
    <p>Unlimited agents, fantastic support, easy to use!</p>

    <a href="/" className="btn btn-outline-light mt-4">
      ← Back to Home
    </a>
  </div>
</Col>
{/* ------------------------------Right Side-------------------------------- */}
      <Col md={6} className="d-flex align-items-center justify-content-center bg-light">
        <Card className="p-4 shadow w-100" style={{ maxWidth: '500px', border: 'none' }}>
          <h2 className="text-center fw-bold">Create Account</h2>
          <p className="text-center text-muted">Join our platform today</p>

          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="fullName" className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Enter your full name" required />
            </Form.Group>

            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jim@company.com" required />
            </Form.Group>

            <Form.Group controlId="phoneNumber" className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Enter your phone number" required />
            </Form.Group>

            <Form.Group controlId="department" className="mb-3">
              <Form.Label>Department</Form.Label>
              <Form.Select value={department} onChange={(e) => setDepartment(e.target.value)} required>
                <option value="">Select Department</option>
                <option value="IT">IT</option>
                <option value="HR">HR</option>
                <option value="Marketing">Marketing</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="password" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" required />
            </Form.Group>

            <Form.Group controlId="confirmPassword" className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm your password" required />
            </Form.Group>

            <Button type="submit" className="w-100 mt-2" style={{ backgroundColor: '#f97316', border: 'none' }} disabled={loading}>
              {loading ? <Spinner animation="border" size="sm" /> : 'Create Account'}
            </Button>
          </Form>

          <p className="text-center mt-3 text-muted">
            Already have an account? <a href="/login">Sign In</a>
          </p>
        </Card>
      </Col>
    </Row>
  );
};

export default SignUp;
