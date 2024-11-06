import React, { useEffect } from 'react';
import "./about.css";
import VicenteImage from "./vicente.png";
import JustinImage from "./justin.png";

function About() {
  useEffect(() => {
    
    document.body.classList.add('about-page');
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.classList.remove('about-page');
      document.body.style.overflowY = '';
    };
  }, []);

  return (
    <div className="about-container">
      <h1>What do we do?</h1>

      <div className="description">
        <p>
          Welcome to Arcadia. We are a game rating website created with the
          singular purpose of informing gamers about popular titles!
        </p>
      </div>

      <div className="picture-h2">
        <h2>This app was designed by:</h2>
      </div>

      <div className="profile-container">
        <div className="profile">
          <h3>Vicente</h3>
          <img src={VicenteImage} alt="Vicente" className="profile-image" />
        </div>

        <div className="profile">
          <h3>Justin</h3>
          <img src={JustinImage} alt="Justin" className="profile-image" />
        </div>
      </div>
    </div>
  );
}

export default About;
