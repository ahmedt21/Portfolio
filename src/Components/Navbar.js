import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="home" className="navbar-logo" smooth={true} duration={500} onClick={closeMobileMenu}>
          MyPortfolio
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="home" className="nav-links" smooth={true} duration={500} onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="about" className="nav-links" smooth={true} duration={500} onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="skills" className="nav-links" smooth={true} duration={500} onClick={closeMobileMenu}>
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link to="contact" className="nav-links" smooth={true} duration={500} onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;