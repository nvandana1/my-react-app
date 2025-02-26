import React from 'react';
import {  FaLinkedinIn ,FaBehance} from 'react-icons/fa';
import './contact.css';

const Contact: React.FC = () => {
  return (
    <div className='main-contact-section'>
        <div className="contact-section">
      <h2>Let's get connected</h2>
      <ul className="contact-info">
        {/* <li>
          <FaEnvelope /> <p>nvandana1@gmail.com</p>
        </li>
        <li>
          <FaPhone/> <p>+91 9353611968</p>
        </li> */}
        <li>
          <FaLinkedinIn /> <a href="https://www.linkedin.com/in/nvandana1/" target='_blank'>linkedin.com/in/nvandana1/</a>
        </li>
        <li>
          <FaBehance /> <a href="" target='_blank'>behance.net/vandananayak</a>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default Contact;


