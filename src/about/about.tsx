import React from 'react';
import './about.css';

const About: React.FC = () => {
  return (
      <div className='about'> 
        <section className="about-section">
      <h2>About Me!</h2>
      <div>
      <p>
        <strong>Name:</strong> Vandana Nayak
      </p>
      <p>
        <strong>Age:</strong> 25
      </p>
      <p>
        <strong>Profession:</strong> UI/UX Enthusiast
      </p>
      <p>
        <strong>Location:</strong> Bengaluru South, India
      </p>
      <p>
        <strong>Vision:</strong> To merge creativity with technical skills for seamless digital experiences.
      </p>
      </div>
    </section>
      </div>
  );
};

export default About;

