import React, {useState} from 'react'
import "./App.css";
import Navbar from "./dashboard/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./dashboard/Home";
import Favorite from "./dashboard/Favorite";
import Footer from './dashboard/Footer';

function Appp() {
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home handleClick={handleClick} cart={cart}/>}></Route>
          <Route path="/favourite" exact element={<Favorite cart={cart} setCart={setCart} />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default Appp;
