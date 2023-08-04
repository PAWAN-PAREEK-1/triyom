import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (

    <div>
    <nav>
      <div className={`menuIcon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>



      <ul className="NavbarList ">
        <li>
          <NavLink to="/" >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/About" >
            About us
          </NavLink>
        </li>
        <li>
          <NavLink to="/Project" >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/Facilities" >
            Facilities
          </NavLink>
        </li>
        <li>
          <NavLink to="/Reviews" >
            Reviews
          </NavLink>
        </li>
        <li>
          <NavLink to="/Gallery" >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to="/Faqs" >
            FAQs
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contact" >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
    <div className='mobileNav'>
          <ul>
             <li>
          <NavLink to="/" >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/About" >
            About us
          </NavLink>
        </li>
        <li>
          <NavLink to="/Project" >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/Facilities" >
            Facilities
          </NavLink>
        </li>
        <li>
          <NavLink to="/Reviews" >
            Reviews
          </NavLink>
        </li>
        <li>
          <NavLink to="/Gallery" >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to="/Faqs" >
            FAQs
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contact" >
            Contact Us
          </NavLink>
        </li>
          </ul>
     </div>
    </div>
  );
};

export default Navbar;
