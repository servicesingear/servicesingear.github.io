import React, { useState } from 'react';
import '../styles/JobApplicationForm.css';

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    jobTitle: '',
    experience: '',
    skills: '',
    coverLetter: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle file input (for resume upload)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, resume: file });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataToSend = new FormData();
  
    // Append form fields
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('jobTitle', formData.jobTitle);
    formDataToSend.append('experience', formData.experience);
    formDataToSend.append('skills', formData.skills);
    formDataToSend.append('coverLetter', formData.coverLetter);
  
    // Append resume file (formData.resume should be a File object)
    if (formData.resume) {
      formDataToSend.append('resume', formData.resume);
    }
  
    try {
      const response = await fetch('https://servicesingear-github-io.onrender.com/apply-job', {
        method: 'POST',
        body: formDataToSend, // Don't set Content-Type manually
      });
  
      const result = await response.json();
  
      if (response.ok) {
        console.log('Form submitted successfully:', result);
        setSubmitted(true);
        setFormData({}); // Reset the form
      } else {
        console.error('Error submitting form:', result);
        setError('There was an issue submitting your application. Please try again.');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('An unexpected error occurred. Please try again.');
    }
  };
  

  return (
    <div className="job-application-page">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Apply for Your Dream Job</h1>
            <p>Join us and take the next step in your career!</p>
          </div>
        </div>
      </section>

      <section className="application-form-section">
        <div className="container">
          <h2>Job Application Form</h2>

          {submitted ? (
            <div className="thank-you-message">
              <h2>Thank you for applying!</h2>
              <p>We will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="application-form">
              {/* Form Fields (Name, Email, Phone, Resume, etc.) */}
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="resume">Resume (PDF, DOC, DOCX)</label>
                <input
  type="file"
  name="resume"
  accept=".pdf,.doc,.docx"
  onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
/>
              </div>
              


              <div className="form-group">
                <label htmlFor="jobTitle">Job Title Applying For</label>
                <input
                  type="text"
                  id="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  placeholder="Job Title"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="experience">Years of Experience</label>
                <input
                  type="number"
                  id="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="Your Experience in Years"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="skills">Skills</label>
                <textarea
                  id="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder="Skills you have"
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="coverLetter">Cover Letter</label>
                <textarea
                  id="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  placeholder="Write a brief cover letter"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">Submit Application</button>
            </form>
          )}

          {error && <p className="error-message">{error}</p>}
        </div>
      </section>
    </div>
  );
};

export default JobApplicationForm;
