import React from 'react';
import './navbar.css';

interface NavbarProps {
    updateActivePage: any;
    activePage: any;
}

const Navbar: React.FC<NavbarProps> = ({updateActivePage,activePage}: any) => {   
  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#about" className={`navbar-logo ${activePage === 'about' ? 'active' : ''}`} onClick={() => updateActivePage('about')}>Portfolio</a>
                <ul className="navbar-menu">
                <li className="navbar-item">
                    <a href="#about" className={`navbar-links ${activePage === 'about' ? 'active' : ''}`} onClick={() => updateActivePage('about')}>About</a>
                </li>
                <li className="navbar-item">
                    <a href="#projects" className={`navbar-links ${activePage === 'projects' ? 'active' : ''}`} onClick={() => updateActivePage( 'projects')}>Projects</a>
                </li>
                <li className="navbar-item">
                    <a href="#contact" className={`navbar-links ${activePage === 'contact' ? 'active' : ''}`} onClick={() => updateActivePage( 'contact')}>Contact</a>
                </li>
                </ul>
            </div>
    </nav>
    </>

  );
};

export default Navbar;

