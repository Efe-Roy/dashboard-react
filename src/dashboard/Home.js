import React from "react";
import Amazon from "../components/amazon";

let Home = ({handleClick, cart}) => {

  return (
    <div className="" style={{ backgroundColor: "#f9fcffe3" }}>
      <h1 style={{marginLeft:"18em"}}>Hire Top Developer</h1>
      <Amazon  handleClick={handleClick} cart={cart}/>
      {/* <h1>HOME</h1> */}
    </div>
  );
}

export default Home;
