
import React, { useState } from 'react';
import Footer from '../Components/Footer';
import CustomNavbar from '../Components/CustomNavbar';
import { FaPhoneAlt, FaEnvelopeOpenText, FaMapMarkerAlt } from "react-icons/fa";
import '../Styles/ContactUs.css'; // Add this import

const ContactUs = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
      setForm({ name: '', email: '', message: '', phone: '' });
      setTimeout(() => setSubmitted(false), 3500); // Optional: auto-hide success
    }
  };

  const mainImage =
    'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg';

  return (
    <>
      <CustomNavbar />
      <div className="container py-5">
        <div className="row align-items-center shadow rounded-4 bg-white overflow-hidden contact-animate-container">
          <div className="col-md-6 p-0 d-flex align-items-stretch">
            <img
              src={mainImage}
              alt="Contact Us"
              className="img-fluid h-100 w-100 object-fit-cover"
              style={{
                minHeight: 400,
                objectFit: 'cover',
              }}
            />
          </div>
          <div className="col-md-6 p-5">
            <h2 className="fw-bold" style={{ color: '#282f39', marginBottom: 10 }}>
              Contact Us
            </h2>
            <p className="mb-4" style={{ color: '#858c96' }}>
              We’d love to hear from you! Reach out with questions or business inquiries.
              Our team replies within one business day.
            </p>
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  id="floatingName"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Your Name"
                  required
                  style={{ background: '#f6f8fa' }}
                />
                <label htmlFor="floatingName">Your Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  id="floatingEmail"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="name@example.com"
                  required
                  style={{ background: '#f6f8fa' }}
                />
                <label htmlFor="floatingEmail">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="tel"
                  id="floatingPhone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Phone"
                  style={{ background: '#f6f8fa' }}
                />
                <label htmlFor="floatingPhone">Phone (optional)</label>
              </div>
              <div className="form-floating mb-3">
                <textarea
                  id="floatingMessage"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Leave your message here"
                  style={{ height: 100, background: '#f6f8fa' }}
                  required
                />
                <label htmlFor="floatingMessage">Your Message</label>
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-send-animate"
                style={{
                  background: '#ff8b2d',
                  color: '#fff',
                  fontWeight: 600,
                  borderRadius: 50,
                  width: '100%',
                  marginTop: 10,
                }}
                disabled={!form.name || !form.email || !form.message}
              >
                Send Message
              </button>

              {submitted && (
                <div className="alert alert-success mt-3 animate-success" role="alert">
                  Thank you! Your message has been received.
                </div>
              )}
            </form>
            {/* Quick Direct Details */}
            <div className="mt-5 quick-details">
              <div className="d-flex flex-column gap-2" style={{ fontSize: '1.05rem', color: '#282f39' }}>
                <div>
                  <FaPhoneAlt className="contact-icon" />{' '}
                  <span className="fw-bold text-orange">Phone:</span> +91 12345 67890
                </div>
                <div>
                  <FaEnvelopeOpenText className="contact-icon" />{' '}
                  <span className="fw-bold text-orange">Email:</span> info@example.com
                </div>
                <div>
                  <FaMapMarkerAlt className="contact-icon" />{' '}
                  <span className="fw-bold text-orange">Address:</span> 123 Business Road, City, India
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
