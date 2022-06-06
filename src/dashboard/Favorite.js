import React from "react";
import Cart from "../components/cart";

let Favorite = ({ cart, setCart, handleChange }) => {

  return (
    <div className="">
      <h1 style={{marginLeft:"18em"}}>Favourite</h1>
      <Cart  cart={cart} setCart={setCart} handleChange={handleChange}/>
    </div>
  );
}

export default Favorite;
