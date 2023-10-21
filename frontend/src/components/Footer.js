import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = (props) => {
  return (
    <div className="card text-center bg-gray shadow">
      <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            <a className="nav-link active" aria-current="true" href="#">Contact Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Follow Us on Social Media</a>
          </li>
        </ul>
      </div>
      <div className="card-body">
        <h5 className="card-title">Stay Connected</h5>
        <p className="card-text">Connect with us to get the latest updates and offers.</p>
        <a href="#" className="btn btn-primary">Go to Cart</a>
      </div>
    </div>
  );
};

export default Footer;