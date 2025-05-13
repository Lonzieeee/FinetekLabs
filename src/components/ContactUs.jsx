import React, { useState } from 'react';
import '../styles/ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    preferredContact: 'Email',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      console.log('Message sent:', formData);
      setStatus('Message sent successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        preferredContact: 'Email',
      });
    }, 1000);
  };

  return (
    <div className="contact-outer-wrapper">
      <div className="contact-wrapper">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Fill up the form and our Team will get back to you within 24 hours</p>
          <div className="contact-details">
            <p><strong>Phone:</strong> +254 734 341 962</p>
            <p><strong>Email:</strong> info@fineteklabs.com</p>
            <p><strong>Location:</strong> Chandaria BIIC, Kenyatta University</p>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="firstName">First Name*</label>
                <div className="input-line">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="lastName">Last Name*</label>
                <div className="input-line">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="input-row">
              <div className="input-group">
                <label htmlFor="email">Email*</label>
                <div className="input-line">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="phone">Phone*</label>
                <div className="input-line">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="input-row">
              <div className="input-group">
                <label htmlFor="company">Company</label>
                <div className="input-line">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="preferredContact">Preferred Contact</label>
                <div className="input-line">
                  <select
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleChange}
                  >
                    <option value="Email">Email</option>
                    <option value="Phone">Phone</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="input-group full-width">
              <label htmlFor="message">How can we help you?*</label>
              <div className="input-line">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="privacy-policy">
              <p>
                By sending this form, I confirm that I have read and accepted the{' '}
                <a href="#">Privacy Policy</a>
              </p>
            </div>

            <button type="submit">SEND</button>
            {status && <p className="status">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
