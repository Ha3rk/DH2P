import React from 'react';

const Navbar = () => {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">
          <img src="./assets/eagl.png" alt="Logo" />
          <h2>DH2P SPORTGEARS</h2>
        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/adults">Adults</a></li>
          <li><a href="/kids">Kids</a></li>
          <li><a href="/cart">Cart</a></li>
          <li><a href="/trending">Trending</a></li>
          <li><a href="/productpage">Discounts</a></li>
          <li><a href="/contact">Contact</a>
          {/*<ul><li>Connect</li><li>Forms</li></ul>*/}
          </li>
        </ul>
        <div className="search-cart">
    <input type="text" placeholder="Search" className="search-input" />
    <div className="cart-icon"><span className="cart-quantity">3</span>
      <i className="fa fa-shopping-cart"></i>
      
    </div>
  </div>
      </nav>
    </div>
  );
}

export default Navbar;
