import React from "react";
import "../styles/cart.css";
import '../styles/card.css'
import { FaHeart } from "react-icons/fa";

const Cart = ({ cart, setCart }) => {

  const handleRemove = (_id) => {
    const arr = cart.filter((item) => item._id !== _id);
    setCart(arr);
  };

  return (
    <React.Fragment>
    <section>
        {cart.map((item) => (
        <figure class="roy" key={item._id}>
            <img src={item._source.service_photo} alt="" style={{height:"130px", width:"300px", borderRadius:"16px"}} />
            <figcaption>
                <img src={item._source.avatar} alt="" className="profile" />
                <button className="fav" onClick={() => handleRemove(item._id)}> <FaHeart/> </button>
         
          <div class="flex-container">

            <p class="flex-child magenta">
              <h2>{item._source.url_name}</h2>
              <span>{item._source.starting_from}</span>
            </p>
            
            <p class="flex-child green">
              Hire
            </p>
            
          </div> 
          <div>
            <button onClick={() => handleRemove(item._id)}>Remove</button>
          </div>
          </figcaption>
        </figure>
      ))}
    </section>
    
      </React.Fragment>
  );
};

export default Cart;
