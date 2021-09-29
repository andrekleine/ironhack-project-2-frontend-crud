import React from "react";

const Cards = (props) => {
  return (
    <div>
      <svg width="320" height="350">
        <rect y="0" rx="20" ry="20" width="320" height="100" fill="yellow" />
        <rect y="50" rx="20" ry="20" width="320" height="100" fill="red" />
        <rect y="100" rx="20" ry="20" width="320" height="100" fill="green" />
        <rect y="150" rx="20" ry="20" width="320" height="100" fill="blue" />
        <rect y="200" rx="20" ry="20" width="320" height="100" fill="black"> <text
          x="230"
          y="38"
          fontSize="36px"
          fontFamily="Tahoma"
          fill="white">Restaurantes
        </text></rect>
        
      </svg>
    </div>
  );
};

export default Cards;
