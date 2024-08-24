import React from 'react';
import './AboutMe.css'; // Import the CSS file for styling
import heroImage from '../../assets/heroImage.png'; 
const AboutMe = () => {
  return (
    <section className="about-me" id="aboutme">
      <div className="about-me-content">
        <div className="about-me-image">
          <img src={heroImage} alt="Your Name" />
        </div>
        <div className="about-me-text">
          <h2>About Me</h2>
          <p>
            Hello! I'm Shrti Shreya, a passionate student of SIT,Tumkur in ISE. I am from Raxaul,Bihar.
          </p>
          <p>
          I am 2nd-year B.Tech student loving the frontend web dev and design scene. Dabbling in Data Structures and Algorithms for that coding finesse.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
