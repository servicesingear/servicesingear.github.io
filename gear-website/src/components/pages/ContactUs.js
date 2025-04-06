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

    // Simulate email sending with EmailJS (You can replace this with actual backend API calls)
    sendEmail(formData);

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

  // Simulate sending an email (Replace with actual backend or email service)
  const sendEmail = (formData) => {
    // You can integrate with services like EmailJS or your backend here
    const emailData = {
      service_id: 'your_service_id',
      template_id: 'your_template_id',
      user_id: 'your_user_id',
      template_params: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        query: formData.query,
        description: formData.description,
      },
    };

    // EmailJS example (replace with your configuration)
    fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(emailData),
    })
      .then((response) => response.json())
      .then((result) => console.log('Success:', result))
      .catch((error) => console.error('Error:', error));
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
            className='inputfield'
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
            className='inputfield'
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <input
            className='inputfield'
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              required
            />
            <textarea
            className='inputfield'
              id="query"
              value={formData.query}
              onChange={handleChange}
              placeholder="Your Query"
              required
            />
            <textarea
            className='inputfield'
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
