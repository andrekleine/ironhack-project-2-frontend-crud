import React from "react";
import "./OneCard.css";
import Rating from "../Details/Rating/Rating";

const OneCard = (props) => {
  return (
    <div className="card mt-1 mb-1" style={{ width: "22rem" }}>
      <div className="title">
        <h4 className="card-title mb-0">{props.name}</h4>
      </div>
      <div className="info">
        <div className="photo-container">
          <img className="card-img-top mt-4" src={props.image} alt="..." />
        </div>
        <div className="card-body">
          <Rating>{props.rating}</Rating>
          <p className="card-text">"{props.tip}"</p>          
        </div>
      </div>
    </div>
  );
};

export default OneCard;
