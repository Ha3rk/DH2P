import React from 'react';

const Navbar = () => {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">
          <img src="./assets/eagl.png" alt="Logo" />
          <h2 className="logo">DH2P SPORTGEARS</h2>
        </div>
        <ul className="nav-links">
        <li className="nav-item">
            <a className="nav-link" href="/">
              <i className="bi bi-house"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/trending">
              <i className="bi bi-lightning"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/kids">
              <i className="bi bi-people"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              <i className="bi bi-envelope"></i>
            </a>
          </li>
          <li className="cart-icon"><span className="cart-quantity">3</span>
      <i className="fa fa-shopping-cart"></i>
      
    </li>
        </ul>
        <div className="search-cart">
    <input type="text" placeholder="Search" className="search-input" />
   
  </div>
      </nav>
    </div>
  );
}

export default Navbar;
