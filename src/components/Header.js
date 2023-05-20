import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
  return (
    <div className="nav_bar">
      <div className="container d-flex justify-content-between">
        <div className="logoType">Adrian's <span>Portfolio</span></div>
        <ul className="nav">
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
    
    </div>
  )
}

export default Header