import './App.css';


import {BrowserRouter, Route, Switch, Redirect, Routes} from "react-router-dom"
import Navbar from "./components/Navbar";
import Cart from "./components/Cart"
import Home from "./components/Home"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/cart" component={<Cart/>}/>
          <Route path="/" exact component={<Home/>}/>     
        </Routes>
     </BrowserRouter> 
    </div>
    
  
  );
}
export default App;
