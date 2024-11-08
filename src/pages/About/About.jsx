import React, { useEffect } from 'react';
import "./about.css";
import VicenteImage from "./vicente.png";
import JustinImage from "./justin.png";

function About() {
  useEffect(() => {
    
    document.body.classList.add('about-page');
    
    return () => {
      document.body.classList.remove('about-page');
      document.body.style.overflowY = '';
    };
  }, []);

  return (
    <div className="about-container">
      

      <div className="description">
      <h1>What do we do?</h1>
        <p>
          Welcome to Arcadia. We are a game rating website created with the
          singular purpose of informing gamers about popular titles!
        </p>
      </div>

      <div className="description">
        <h2>Our Purpose</h2>
        
        <p>
          At Arcadia, we believe that gaming is more than just entertainment—it's a vibrant, shared experience that brings people together. 
          Our purpose is to create a platform that connects gamers worldwide, offering a space to discover new games, celebrate classics, and engage with a passionate community. 
          We aim to support both players and developers by providing a comprehensive library of games, enriched with user-generated reviews, personalized recommendations, and innovative features to enhance the gaming journey.
        </p>
      </div>

      <div className="description-list">
        <h2>Our Mission</h2>
        
        <p>Our mission is to make gaming accessible, enjoyable, and meaningful for everyone. We are dedicated to:</p>
        <ul>
        <li>Curating Quality Content: Bringing together top-rated and trending games to help our users find their next adventure with ease.</li>
        <li>Supporting Developers: Providing indie and established developers alike with a platform to showcase their games and reach new audiences.</li>
        <li>Fostering Community: Building a vibrant, inclusive community where gamers can connect, share experiences, and inspire each other.</li>
        <li>Innovating User Experience: Continuously enhancing our platform with the latest technology to offer a seamless, interactive experience for all our users.</li>
       </ul>
      </ div>
      
      <div className='picture-segment'>
      <div className="picture-h2">
        <h2>Our founders:</h2>
      </div>

      <div className="profile-container">
        <div className="profile">
          <h3>Vicente</h3>
          <p>I’m an ordinary guy from Valencia, currently I'm learning web
              development at Ironhack, I love video games, movies, drawing, and
              traveling. What I adore most in the world is my pets; right now, I
              have three cats.</p>
          <a href="https://www.linkedin.com/in/vicente-duch-moreno-a7b6a82a2/">LinkedIn</a>
          <a href="https://github.com/vicenteduch">Github</a>
          
          <img src={VicenteImage} alt="Vicente" className="profile-image" />
        </div>

        <div className="profile">
          <h3>Justin</h3>
          <p>Passionate about gaming and technology, Justin brings creativity and innovation to Arcadia. 
            With a keen eye for detail and a drive to build engaging user experiences, 
            he strives to make Arcadia a go-to community for gamers worldwide.</p>
          <a href="https://www.linkedin.com/in/justin-fanton-2034551a8/">LinkedIn</a>
          <a href="https://github.com/JAFanton">Github</a>
          <img src={JustinImage} alt="Justin" className="profile-image" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default About;
