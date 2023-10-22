import React from 'react';

const Navbar = () => {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">
          <img src="./assets/eagl.png" alt="Logo" />
          <h2>DH2P Sportgears</h2>
        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">Login</a></li>
          <li><a href="/services">Register</a></li>
          <li><a href="/cart">Cart</a></li>
        </ul>

        <div className="search-cart">
          <input type="text" placeholder="Search" className="search-input" />
          <div className="cart-icon">
            <i className="fa fa-shopping-cart"></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
