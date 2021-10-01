import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <g>
      <Link to={props.link} style={{textDecoration: "none"}}>
        <rect
          y={props.cardY}
          rx="20"
          ry="20"
          width="320"
          height="100"
          fill={props.cardColor}
        />
        <text x="30" y={props.textY} fill={props.textColor} className="card">
          {props.cardName}
        </text>
      </Link>
    </g>
  );
};

export default Card;