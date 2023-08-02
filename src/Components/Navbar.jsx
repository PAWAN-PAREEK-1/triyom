import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css"

const Navbar = () => {
  return (
    <nav>
        <div className='menuIcon'>

            <ul className='NavbarList'>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/About">About us</NavLink>
                </li>
                <li>
                    <NavLink to="/Project">Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/Facilities">facilities</NavLink>
                </li>
                <li>
                    <NavLink to="/Reviews">Reviews</NavLink>
                </li>
                <li>
                    <NavLink to="/Gallery">Gallary</NavLink>
                </li>
                <li>
                    <NavLink to="/Faqs">FAQs</NavLink>
                </li>
                <li>
                    <NavLink to="/Contact">Contact Us</NavLink>
                </li>
            </ul>

        </div>
    </nav>
  )
}

export default Navbar