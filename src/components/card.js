import React from "react";
import '../styles/card.css'
import { FaHeart } from "react-icons/fa";

const Cards = ({ item, handleClick }) => {
  const { _source } = item;
  return (
    <React.Fragment>

      <figure class="roy">
         
            <img src={_source.service_photo} alt="" style={{height:"130px", width:"300px", borderRadius:"16px"}} />
            <figcaption>
                <img src={_source.avatar} alt="" className="profile" style={{margin:"3px"}}/>
          <button className="fav" onClick={() => handleClick(item)}>
             <FaHeart /> 
          </button>

          <div class="flex-container">

            <p class="flex-child magenta">
              <h2 style={{fontWeight:"1700"}}>{_source.url_name}</h2>
              <p style={{marginTop:"9px", fontWeight:"bold"}}>{_source.starting_from}</p>
            </p>
            
            <p class="flex-child green" style={{fontWeight:"bold"}}>
              Hire
            </p>
            
          </div>
         </figcaption>
        </figure>
    </React.Fragment>
  );
};

export default Cards;

