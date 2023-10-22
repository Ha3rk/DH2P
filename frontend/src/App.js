import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Header';
import ProductPage from './components/ProductPage';
import Home from "./components/Home";
import { BrowserRouter as  Router, Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<ProductPage />} />
            <Route path="/Home" element={<Home />} />
          </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
