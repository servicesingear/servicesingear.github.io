
import '../styles/Career.css';
import jobsData from '../data/jobs.json';
import React, { useState } from 'react';
import HorizontalJobCard from './JobCard';

const Career = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const googleFormURL = 'https://forms.gle/JHCSjonKdXZ1HWaY8';
    const filteredJobs = jobsData.filter((job) =>
        job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <div>
    <section className="career-header-section">
      <div className="container-fluid">
        <div className="row">
          {/* Left aligned content */}
          <div className="col-md-10 text-left">
            <p className="line-one">Home / Career</p>
            <p className="line-two">Career</p>
            <p className="line-three">Discover Excellence In Your Career</p>
          </div>
        </div>
      </div>
      </section>
      <section className="career-content-section">
      <div className="container">
        {/* Centered Header with Animation */}
        <div className="section-header animated fadeInDown">
          <h2>JOIN OUR TEAM</h2>
          <p>Find the perfect opportunity for your future</p>
        </div>

        {/* Search Bar with Animation */}
       
        <div className="search-bar animated fadeInUp">
          <div className="input-group">
            
            <input
              type="text"
              className="form-control"
              placeholder="Search by job title, industry, or location..."
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span className="input-group-text search-icon">
              <i className="fa fa-search"></i>
            </span>
          </div>
        </div>
        <div className="container my-4">
     
      <div className="row">
        {filteredJobs.map((job) => (
          <div key={job.id} className='col-12 col-md-7 col-lg-5' >
            <HorizontalJobCard job={job} googleFormURL={googleFormURL} />
          </div>
        ))}
      </div>
    </div>
        </div>
    </section>
       </div>
      
  );
};

export default Career;
