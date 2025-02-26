import './home.css';
import profileImage from './../assets/profile2.jpg';
import { FaBehance, FaLinkedinIn } from 'react-icons/fa';
export default function Home() {
  return (
    <>
    
    <section className="hero">
      <img src={profileImage} alt="Profile" className="hero-image" />
      <div className="hero-content">
        <h1>Vandana Nayak</h1>
        <small>UI/UX learner | Software Engineer</small>
      </div>
      <div className="hero-buttons">
        <button className='button-primary' onClick={() => window.open('https://www.behance.net/vandananayak', '_blank')}>
          <FaBehance /> Behance
        </button>
        <button className='button-secondary' onClick={() => window.open('https://www.linkedin.com/in/nvandana1/', '_blank')}>
          <FaLinkedinIn /> LinkedIn
        </button>
      </div>
    </section>
    <footer className="hero-footer">
    <small>Website built using React and AI</small>
  </footer></>
  );
}
