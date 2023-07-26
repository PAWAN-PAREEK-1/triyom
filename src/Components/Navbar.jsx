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
                    <NavLink to="/Contact">Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/Services">facilities</NavLink>
                </li>
                <li>
                    <NavLink to="/">Reviews</NavLink>
                </li>
                <li>
                    <NavLink to="/About">Gallary</NavLink>
                </li>
                <li>
                    <NavLink to="/Contact">FAQs</NavLink>
                </li>
                <li>
                    <NavLink to="/Services">Contact Us</NavLink>
                </li>
            </ul>

        </div>
    </nav>
  )
}

export default Navbar