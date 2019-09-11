import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  const navStyle = {
    color: 'white'
  };

  return (
    <nav className="navbar">
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li>Restaurants</li>
        </Link>
        <Link style={navStyle} to='/recipes'>
          <li>Recipes</li>
        </Link>
        <Link style={navStyle} to='/info'>
          <li>Info</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
