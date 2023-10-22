import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg from '../assets/bg.jpeg';

const Home = () => {
  return (
    <div>
          <div className="container">
          <img src={bg} className="card-img" alt="Background" height="700px" style={{ opacity: 0.75 }} />
            <h5 className="cart-title display-3 fw-bolder mb-0">New Released Products</h5>
            <p className="card-text lead fs-2">CHECK OUR NEW ARRIVALS</p>
          </div>
    </div>
  );
};

export default Home;