import React from 'react';
import '../styles/JobCard.css'; // CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Include Bootstrap for responsiveness
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
 

  return (
    <div className="job-card d-flex flex-wrap flex-md-nowrap align-items-start">
      {/* Left Section - Image */}
      {/* <div className="job-image">
        <img src={job.companyLogo} alt="Job" />
      </div> */}

      {/* Middle Section - Content */}
      <div className="job-content">
        <p className="job-industry">{job.department}</p>
        <p className="job-title">{job.title}</p>
        <p className="inline-content">
        <span> <i className="fa-solid fa-building"></i>
          {job.work_model}</span>
          <span><i className="fa-solid fa-location-dot"></i>
          
           
            {job.location}
          </span>
        </p>
        {/* <p className="job-salary">{job.salary} /per month</p> */}
      </div>

      {/* Right Section - Job Type and Apply Button */}
      <div className="job-action d-flex flex-column justify-content-between">
        <div><p className="job-type">{job.job_type} </p></div>
        <div><button
          className="btn-primary"
         
        ><Link to="/career/jobapplication" className='apply'>
          Apply Now</Link>
        </button></div>
        
        
      </div>
    </div>
  );
};

export default JobCard;
