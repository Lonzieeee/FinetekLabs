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

    // Simulate sending the message (later to be connected to an API)
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
          <input
            type="text"
            name="firstName"
            placeholder="First Name*"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name*"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone*"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="How can we help you?*"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <div className="contact-options">
            <label>
              <input
                type="radio"
                name="preferredContact"
                value="Email"
                checked={formData.preferredContact === 'Email'}
                onChange={handleChange}
              />
              Email
            </label>
            <label>
              <input
                type="radio"
                name="preferredContact"
                value="Phone"
                checked={formData.preferredContact === 'Phone'}
                onChange={handleChange}
              />
              Phone
            </label>
          </div>
          <div className="privacy-policy">
            <p>By sending this form, I confirm that I have read and accepted the <a href="#">Privacy Policy</a></p>
          </div>
          <button type="submit">SEND</button>
          {status && <p className="status">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
