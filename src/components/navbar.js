import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  const navStyle = {
    color: 'white'
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img className='nav-icon' src="https://cdn4.iconfinder.com/data/icons/filled-vegetables-colored/4096/Chili_pepper_2-512.png" alt=""/>
        <h3 className='nav-logo-text'>The Hot Tamale</h3>
      </div>
      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li>Restaurants</li>
        </Link>
        <Link style={navStyle} to='/recipes'>
          <li>Recipes</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
