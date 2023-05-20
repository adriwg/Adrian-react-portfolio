import React from 'react';
import { NavLink } from 'react-router-dom';
//import '../css/Header.css';

const Header = () => {
  return (
    <div className="nav_bar">
    <ul className="nav justify-content-end">
        <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Home</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="projects" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Projects</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Contact</NavLink>
        </li>
    </ul>
    </div>
  )
}

export default Header