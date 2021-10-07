import React from "react";
// import { Link } from "react-router-dom";
import Card from "./Card";

const CardRack = (props) => {
  return (
    <svg width="320" height="350">
      <Card
        link={`/favoritos/${props.user}/Alimentação`}
        cardY="0"
        cardColor="#E2E200"
        textY="36"
        textColor="#919100"
        cardName="Alimentação"
      />

      <Card
        link={`/favoritos/${props.user}/Entretenimento`}
        cardY="50"
        cardColor="#FF5959"
        textY="86"
        textColor="#CC0000"
        cardName="Entretenimento"
      />
      <Card
        link={`/favoritos/${props.user}/Recreação`}
        cardY="100"
        cardColor="#54CE52"
        textY="136"
        textColor="#238C21"
        cardName="Recreação"
      />
      <Card
        link={`/favoritos/${props.user}/Serviços`}
        cardY="150"
        cardColor="#8C7CFF"
        textY="186"
        textColor="#1D00FF"
        cardName="Serviços"
      />
      <Card
        link={`/favoritos/${props.user}/Diversos`}
        cardY="200"
        cardColor="black"
        textY="236"
        textColor="white"
        cardName="Diversos"
      />
    </svg>
  );
};

export default CardRack;
