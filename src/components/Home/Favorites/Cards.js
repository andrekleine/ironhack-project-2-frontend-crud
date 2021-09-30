import React from "react";
// import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div>
      <svg width="320" height="350">
        <g>
          {/* <Link to="#"> */}
          <rect y="0" rx="20" ry="20" width="320" height="100" fill="#E2E200" />
          <text x="30" y="36" fill="#919100" className="card">
            Restaurantes
          </text>
          {/* </Link> */}
        </g>

        <g>
          {/* <Link to="#"> */}
          <rect
            y="50"
            rx="20"
            ry="20"
            width="320"
            height="100"
            fill="#FF5959"
          />
          <text x="30" y="86" fill="#CC0000" className="card">
            Cafés
          </text>
          {/* </Link> */}
        </g>
        <g>
          {/* <Link to="#"> */}
          <rect
            y="100"
            rx="20"
            ry="20"
            width="320"
            height="100"
            fill="#54CE52"
          />
          <text x="30" y="136" fill="#238C21" className="card">
            Livrarias
          </text>
          {/* </Link> */}
        </g>
        <g>
          {/* <Link to="#"> */}
          <rect y="150" rx="20" ry="20" width="320" height="100" fill="#8C7CFF" />
          <text x="30" y="186" fill="#1D00FF" className="card">
            Academias
          </text>
          {/* </Link> */}
        </g>
        <g>
          {/* <Link to="#"> */}
          <rect y="200" rx="20" ry="20" width="320" height="100" fill="black" />
          <text x="30" y="236" fill="white" className="card">
            Diversos
          </text>
          {/* </Link> */}
        </g>
      </svg>
    </div>
  );
};

export default Cards;
