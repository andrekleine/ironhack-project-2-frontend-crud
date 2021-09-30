import React from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div>
      <svg width="320" height="350">
        <g>
          {/* <Link to="#"> */}
            <rect
              y="0"
              rx="20"
              ry="20"
              width="320"
              height="100"
              fill="yellow"
            />
            <text
              x="30"
              y="38"
              fontSize="32px"
              fontFamily="Tahoma"
              fill="black"
            >
              Restaurantes
            </text>
          {/* </Link> */}
        </g>

        <g>
          {/* <Link to="#"> */}
            <rect y="50" rx="20" ry="20" width="320" height="100" fill="red" />
            <text
              x="30"
              y="88"
              fontSize="32px"
              fontFamily="Tahoma"
              fill="white"
            >
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
              fill="green"
            />
            <text
              x="30"
              y="138"
              fontSize="32px"
              fontFamily="Tahoma"
              fill="white"
            >
              Livrarias
            </text>
          {/* </Link> */}
        </g>
        <g>
          {/* <Link to="#"> */}
            <rect
              y="150"
              rx="20"
              ry="20"
              width="320"
              height="100"
              fill="blue"
            />
            <text
              x="30"
              y="188"
              fontSize="32px"
              fontFamily="Tahoma"
              fill="white"
            >
              Academias
            </text>
          {/* </Link> */}
        </g>
        <g>
          {/* <Link to="#"> */}
            <rect
              y="200"
              rx="20"
              ry="20"
              width="320"
              height="100"
              fill="black"
            />
            <text
              x="30"
              y="238"
              fontSize="32px"
              fontFamily="Tahoma"
              fill="white"
            >
              Diversos
            </text>
          {/* </Link> */}
        </g>
      </svg>
    </div>
  );
};

export default Cards;
