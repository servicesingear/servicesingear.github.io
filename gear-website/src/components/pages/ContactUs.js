import React, { useState } from 'react';
import '../styles/ContactUs.css';

function ContactUs({ closePopup }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    query: '',
    description: '',
  });

  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false); // Track submission status

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to the backend API
    submitFormData(formData);

    setMessage('Thank you for contacting us! We will get back to you soon.');
    setSubmitted(true); // Set submission to true, so we show the thank you message

    // Clear form data
    setFormData({
      name: '',
      email: '',
      phone: '',
      query: '',
      description: '',
    });

    // Close the popup after 3 seconds
    setTimeout(() => {
      closePopup();
      setMessage('');
    }, 3000);
  };

  // Function to submit the form data to the backend API
  const submitFormData = (formData) => {
    const backendApiUrl = 'https://servicesingear-github-io.onrender.com/submit'; // Replace with your backend API URL

    // Send form data to the backend API using fetch
    fetch(backendApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('Form submitted successfully:', result);
      })
      .catch((error) => {
        console.error('Error submitting the form:', error);
      });
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="close-btn" onClick={closePopup}>
          X
        </button>
        <h2 className="popup-heading">Contact Us</h2>
        {submitted ? (
          <div className="thank-you-message">
            <h2>Thank you for contacting us!</h2>
            <p>We have received your message and will get back to you soon.</p>
            <p>A copy of your submission has been sent to your email.</p>
          </div>
        ) : (
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
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
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
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactUs;
