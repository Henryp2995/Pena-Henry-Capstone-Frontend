import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from '/src/pages/AboutUs.jsx';
import Items from '/src/pages/Items.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/items">Items</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/Items" element={<Items />} />
          <Route path="/about" element={<About />} />
          {/* Define other routes here */}
        </Routes>
        Welcome to my gundam webstore
        <img src="./src/assets/home.jpg" alt="" />
      </div>
    </Router>
  );
};

export default App;