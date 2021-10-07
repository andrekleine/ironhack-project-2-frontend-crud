import React from "react";
import CardRack from "./CardRack";
import Wallet from "./Wallet";

const Favorites = (props) => {
  return (
    <div className="favorites">
      <CardRack user={props.user}/>      
      <Wallet />
    </div>
  );
};

export default Favorites;