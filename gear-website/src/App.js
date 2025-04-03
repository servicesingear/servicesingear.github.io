import logo from './logo.svg';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Career from './components/pages/Career';

function App() {
  return (
    <div className="App">
          
          
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />
        {/* You can add more routes here */}
      </Routes>
   
    </div>
  );
}

export default App;
