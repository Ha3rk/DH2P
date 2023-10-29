import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';



import { BrowserRouter as  Router, Link, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Productpage from './components/ProductPage';
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Checkout from "./components/Checkout"
import Trending from './components/Trending';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/*work on the Navbar from Collaborator info given later*/}
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/productpage" element={<Productpage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;