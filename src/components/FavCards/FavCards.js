import axios from "axios";
import React, { useState, useEffect } from "react";
import CardComment from "../Card/CardComment";
import Rating from "../Details/Rating/Rating";

const FavCards = (props) => {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    const {user, category} = props.match.params;

    axios
      .get(
        `https://ironrest.herokuapp.com/findAll/meusFavoritos?user=${user}&category=${category}`
      )
      .then((response) => {
        setCollection([...response.data]);
      })
      .catch((err) => console.error(err));
  }, [props.match.params]);

  console.log(collection[0].venue.name);
// Colocar a nota para depois fazer um sort by nota, se quiser, ou até um filtro com valores, acima de ou abaixo de
  return (
    <div>
  <h1> {collection[0].category}</h1>

  <CardComment title={collection[0].venue.name} text1={collection[0].venue.tip} text2={collection[0].venue.rating} />
      <Rating>{collection[0].venue.rating}</Rating>
    </div>
  );
};

export default FavCards;
