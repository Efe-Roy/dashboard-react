import React, { useState, useEffect } from "react";
import Cards from "./card";
import "../styles/amazon.css";
import axios from "axios";

const Amazon = ({ handleClick, cart }) => {
      const [repo, setRepo] = useState([])
  
  const getRepo = () => {
    axios.get(' https://api.terawork.com/service-categories/sellers-services/computer-software-development')
      .then((response) => {
        console.log(response);
        const myRepo = response.data.data;
        setRepo(myRepo)
    });
  }

  useEffect(() => getRepo(), []);

  return (
    <section>
         {repo.service_search_results?.hits.map((repos) => {
           return(
        <Cards key={repos._id} item={repos} handleClick={handleClick} cart={cart}/>
           )
         })}
      
    </section>
  );
};

export default Amazon;
