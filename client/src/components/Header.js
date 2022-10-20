// import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../media/logo.png';

function Header() {
  let navigate = useNavigate();

  return (
    <header>
      <img
        className="logo"
        src={logo}
        alt="Logo"
        onClick={() => navigate('/')}
      />
      <nav>
        <ul className="nav_links">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/photography">Photography</Link>
          </li>
        </ul>
      </nav>
      <button onClick={() => navigate('/contact')}>Contact</button>
    </header>
  );
}

export default Header;
