import React from 'react';
import '../styles/JobCard.css'; // CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Include Bootstrap for responsiveness

const JobCard = ({ job }) => {
  const googleFormURL = 'https://your-google-form-url.com'; // Replace with your actual URL

  return (
    <div className="job-card d-flex flex-wrap flex-md-nowrap align-items-start">
      {/* Left Section - Image */}
      <div className="job-image">
        <img src={job.companyLogo} alt="Job" />
      </div>

      {/* Middle Section - Content */}
      <div className="job-content">
        <p className="job-industry">{job.industry}</p>
        <p className="job-title">{job.jobTitle}</p>
        <p className="inline-content">
        <span> <i className="fa-solid fa-building"></i>
          {job.workModel}</span>
          <span><i className="fa-solid fa-location-dot"></i>
          
           
            {job.location}
          </span>
        </p>
        <p className="job-salary">{job.salary}</p>
      </div>

      {/* Right Section - Job Type and Apply Button */}
      <div className="job-action d-flex flex-column justify-content-between">
        <div><p className="job-type">{job.jobType}</p></div>
        <div><button
          className="btn-primary"
          onClick={() => window.open(googleFormURL, '_blank')}
        >
          Apply Now
        </button></div>
        
        
      </div>
    </div>
  );
};

export default JobCard;
