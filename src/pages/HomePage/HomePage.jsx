import React, { useEffect } from "react";
import "../HomePage/homePage.css";

function HomePage() {
  useEffect(() => {
    // Add a class to body when on HomePage
    document.body.classList.add('home-page-background');
    document.body.style.overflowY = 'hidden';

    return () => {
      // Remove class and add y-axis scroller to body when leaving HomePage
      document.body.classList.remove('home-page-background');
      document.body.style.overflowY = ''; 
    };
  }, []);

  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome to Arcadia Games</h1>
        <p>Your ultimate source for games, reviews, and guides.</p>
      </header>
    </div>
  );
}

export default HomePage;