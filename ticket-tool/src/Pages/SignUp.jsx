import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Card, Alert, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = 'https://perpetual-liberation-service-ticket.up.railway.app/api/save';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(API_URL, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        department: formData.department,
        password: formData.password,
        role: 'USER'
      });

      setSuccess(`Account created for ${response.data.name}`);
      setFormData({
        name: '',
        email: '',
        phone: '',
        department: '',
        password: '',
        confirmPassword: ''
      });
    } catch (err) {
      setError(err.response?.data || 'Failed to register. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <style>{`
        body {
          background-color: #f0f2f5;
        }
        .signup-card {
          width: 100%;
          max-width: 400px;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
      `}</style>

      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Card className="signup-card">
          <h3 className="text-center mb-3">Create Account</h3>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Department</Form.Label>
              <Form.Select name="department" value={formData.department} onChange={handleChange} required>
                <option value="">Select Department</option>
                <option value="IT">IT</option>
                <option value="Support">Support</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
            </Form.Group>

            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}

            <Button variant="primary" type="submit" className="w-100" disabled={isLoading}>
              {isLoading ? <Spinner animation="border" size="sm" /> : 'Register'}
            </Button>
          </Form>
        </Card>
      </Container>
    </>
  );
};

export default SignUp;
