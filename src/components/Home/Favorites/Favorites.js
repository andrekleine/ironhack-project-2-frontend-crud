import React from "react";
import CardRack from "./CardRack";
import Wallet from "./Wallet";

const Favorites = () => {
  return (
    <div className="favorites">
      <CardRack />      
      <Wallet />
    </div>
  );
};

export default Favorites;