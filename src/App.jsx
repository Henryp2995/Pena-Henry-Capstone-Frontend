import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from '/src/pages/AboutUs.jsx';
import Items from '/src/pages/Items.jsx';
import AddItems from '/src/pages/AddItems.jsx'; // Import the AddItems page component
import './App.css'; // Import your CSS file for styling

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <nav className="nav-container">
          <ul className="nav-list">
            <li className="nav-item"><Link to="/">Home</Link></li>
            <li className="nav-item"><Link to="/items">Items</Link></li>
            <li className="nav-item"><Link to="/additems">Add Items</Link></li> {/* Add link to AddItems page */}
            <li className="nav-item"><Link to="/about">About Us</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/items" element={<ItemsPage />} />
          <Route path="/additems" element={<AddItemsPage />} /> {/* Add route for AddItems page */}
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

const Landing = () => {
  return (
    <div className="landing-container">
      Welcome to my gundam webstore
      <img src="./src/assets/home.jpg" alt="" className="landing-image" />
    </div>
  );
};

const ItemsPage = () => {
  return (
    <div>
      <h2>Items</h2>
      <Items />
    </div>
  );
};

const AddItemsPage = () => { // Define AddItemsPage component
  return (
    <div>
      <h2>Add Items</h2>
      <AddItems />
    </div>
  );
};

export default App;
