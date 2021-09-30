import React from "react";
import Cards from "./Cards";
import Wallet from "./Wallet";

const Favorites = () => {
  return (
    <div className="favorites">
      <Cards />      
      <Wallet />
    </div>
  );
};

export default Favorites;