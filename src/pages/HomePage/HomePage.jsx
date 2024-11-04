import React from "react";
import { NavLink } from "react-router-dom";
import "../HomePage/homePage.css";

function HomePage() {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome to Arcadia Games</h1>
        <p>Your ultimate source for games, reviews, and guides.</p>
      </header>
      
      <div className="home-buttons">
        <NavLink to="/catalogue" className="home-button">
          Browse Catalogue
        </NavLink>
        
        <NavLink to="/about" className="home-button">
          About Us
        </NavLink>
      </div>
    </div>
  );
}

export default HomePage;