import React, { useState } from 'react';
import '../styles/ContactUs.css';

function ContactUs({ closePopup }) {
  const [formData, setFormData] = useState({
    name: '',
    workEmail: '',
    phone: '',
    position: '',
    company: '',
    query: '',
    description: '',
  });

  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    submitFormData(formData)
      .then(() => {
        setMessage('Thank you for contacting us! We will get back to you soon.');
        setSubmitted(true);
        setLoading(false);

        setFormData({
          name: '',
          workEmail: '',
          phone: '',
          position: '',
          company: '',
          query: '',
          description: '',
        });

        // Close popup after 3 seconds
        setTimeout(() => {
          closePopup();
          setMessage('');
          setSubmitted(false);
        }, 3000);
      })
      .catch((error) => {
        setLoading(false);
        setMessage('There was an error submitting the form. Please try again.');
        console.error('Error submitting the form:', error);
      });
  };

  // Updated submitFormData to return a promise
  const submitFormData = (formData) => {
    const backendApiUrl = 'https://servicesingear-github-io.onrender.com/submit';

    return fetch(backendApiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    }).then((response) => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    });
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="close-btn" onClick={closePopup}>
          X
        </button>
        <h2 className="popup-heading">Contact Us</h2>

        {loading && (
          <div className="loading-message">
            <p>Submitting your form, please wait...</p>
          </div>
        )}

        {!loading && submitted && (
          <div className="thank-you-message">
            <h2>Thank you for contacting us!</h2>
            <p>We have received your message and will get back to you soon.</p>
            <p>A copy of your submission has been sent to your work email.</p>
          </div>
        )}

        {!loading && !submitted && (
          <form id="contact-form" onSubmit={handleSubmit}>
            <input
              className="inputfield"
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              className="inputfield"
              type="email"
              id="workEmail"
              value={formData.workEmail}
              onChange={handleChange}
              placeholder="Your Work Email"
              required
            />
            <input
              className="inputfield"
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              required
            />
            <input
              className="inputfield"
              type="text"
              id="position"
              value={formData.position}
              onChange={handleChange}
              placeholder="Your Position"
              required
            />
            <input
              className="inputfield"
              type="text"
              id="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company Name"
              required
            />
            <textarea
              className="inputfield"
              id="query"
              value={formData.query}
              onChange={handleChange}
              placeholder="Your Query"
              required
            />
            <textarea
              className="inputfield"
              id="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Additional Description"
              required
            />
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        )}

        {!loading && message && !submitted && (
          <div className="error-message">{message}</div>
        )}
      </div>
    </div>
  );
}

export default ContactUs;
