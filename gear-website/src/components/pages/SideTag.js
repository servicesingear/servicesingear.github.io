import React from 'react';
import { Link } from 'react-router-dom';
import { FaBriefcase } from 'react-icons/fa'; // Import any suitable icon
import '../styles/SideTag.css'; // Custom CSS for styling

const SideTag = () => {
  return (
    <div className="side-tag">
      <Link to="/career" className="career-link">
        <FaBriefcase className="career-icon" /> {/* Icon for the tag */}
        <span className="career-text">Career</span> {/* Hidden by default */}
      </Link>
    </div>
  );
};

export default SideTag;
