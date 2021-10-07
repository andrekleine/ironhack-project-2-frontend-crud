import React from "react";

const Favbar = (props) => {
  return (
    <nav className="navbar fixed-top" style={{display: "flex", justifyContent:"center", backgroundColor:{props.color}}}>
      <Link to="/Home" style={{textDecoration:"none", color:"white"}}>
        <h2>Meus Favoritos</h2>
      </Link>
    </nav>
  );
};

export default Favbar;
