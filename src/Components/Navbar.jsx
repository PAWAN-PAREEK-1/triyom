import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className={`menuIcon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>

      <ul className={`NavbarList ${menuOpen ? 'open' : ''}`}>
        <li>
          <NavLink to="/" onClick={toggleMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/About" onClick={toggleMenu}>
            About us
          </NavLink>
        </li>
        <li>
          <NavLink to="/Project" onClick={toggleMenu}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/Facilities" onClick={toggleMenu}>
            Facilities
          </NavLink>
        </li>
        <li>
          <NavLink to="/Reviews" onClick={toggleMenu}>
            Reviews
          </NavLink>
        </li>
        <li>
          <NavLink to="/Gallery" onClick={toggleMenu}>
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to="/Faqs" onClick={toggleMenu}>
            FAQs
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contact" onClick={toggleMenu}>
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
