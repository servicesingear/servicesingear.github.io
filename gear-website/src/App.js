import './App.css';
import Home from './components/pages/Home';
import {Routes, Route } from 'react-router-dom';
import Career from './components/pages/Career';
import JobApplicationForm from './components/pages/JobApllicationForm';

function App() {
  return (
    <div className="App">
          
          
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />
        {/* You can add more routes here */}
        <Route path="/career/jobapplication" element={<JobApplicationForm /> } />
      </Routes>
   
    </div>
  );
}

export default App;
