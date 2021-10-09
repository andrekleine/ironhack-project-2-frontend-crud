import React from "react";
import { Link } from "react-router-dom";

const ResultCard = (props) => {
  return (
    <Link to={`/details/${props.id}`} style={{ textDecoration: "none" }}>
      <div className="card mt-2" style={{ width: "18rem", height: "8rem" }}>
        <div className="card-body m-1">
          <h5 className="card-title" style={{ color: "black" }}>
            {props.name}
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.category}</h6>
          <p className="card-text" style={{ color: "black" }}>
            {props.address} - {props.city} - {props.country}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ResultCard;
