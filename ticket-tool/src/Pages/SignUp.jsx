import React, { useState } from 'react';
import axios from 'axios';
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
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!/^[A-Za-z ]+$/.test(formData.name)) {
      setError("Name should contain only letters");
      return;
    }

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      setError("Phone must be a 10-digit number");
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
      setError(err.response?.data || 'Registration failed. Try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <style>{`
        .signup-page {
          display: flex;
          min-height: 100vh;
        }

        .banner {
          background: linear-gradient(135deg, #007bff, #6610f2);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding: 30px;
          animation: fadeIn 1s ease-in-out;
        }

        .banner img {
          max-height: 300px;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .form-container {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
          background-color: #f8f9fa;
        }

        .form-box {
          width: 100%;
          max-width: 500px;
          background: white;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
      `}</style>

      <div className="signup-page">
        <div className="col-md-6 d-none d-md-flex banner">
          <h2 className="mb-3">Welcome to Service Desk</h2>
          <p className="text-center px-4">Create an account to manage your tickets efficiently</p>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/online-helpdesk-4055701-3368191.png"
            alt="Banner"
            className="img-fluid"
          />
        </div>

        <div className="form-container col-md-6">
          <div className="form-box">
            <h3 className="text-center mb-4">Sign Up</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-2">
                <label>Name</label>
                <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="form-group mb-2">
                <label>Email</label>
                <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="form-group mb-2">
                <label>Phone</label>
                <input type="text" className="form-control" name="phone" value={formData.phone} onChange={handleChange} required />
              </div>

              <div className="form-group mb-2">
                <label>Department</label>
                <select className="form-select" name="department" value={formData.department} onChange={handleChange} required>
                  <option value="">Select</option>
                  <option value="IT">IT</option>
                  <option value="Support">Support</option>
                  <option value="HR">HR</option>
                  <option value="Finance">Finance</option>
                </select>
              </div>

              <div className="form-group mb-2">
                <label>Password</label>
                <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required />
              </div>

              <div className="form-group mb-3">
                <label>Confirm Password</label>
                <input type="password" className="form-control" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
              </div>

              {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">{success}</div>}

              <button type="submit" className="btn btn-primary w-100" disabled={isLoading}>
                {isLoading ? 'Registering...' : 'Register'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
