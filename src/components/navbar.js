import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar">
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link to="/">
          <li>Restaurants</li>
        </Link>
        <Link to='/recipes'>
          <li>Recipes</li>
        </Link>
        <Link to='/info'>
          <li>Info</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
