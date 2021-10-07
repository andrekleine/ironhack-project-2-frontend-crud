import axios from "axios";
import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import OneCard from "./OneCard";

const FavCards = (props) => {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    const { user, category } = props.match.params;

    axios
      .get(
        `https://ironrest.herokuapp.com/findAll/meusFavoritos?user=${user}&category=${category}`
      )
      .then((response) => {
        setCollection([...response.data]);
      })
      .catch((err) => console.error(err));
  }, [props.match.params]);

  console.log(collection);

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        {collection.length ? collection.map((venueObj) => {
          const targetObj = venueObj.venue;          
          return (
            <OneCard key={venueObj._id} image={targetObj.imageSrc} name={targetObj.name} tip={targetObj.tip} rating={targetObj.rating}/>
          );
        }) : <h1>Voce ainda nao adicionou Favoritos a esta categoria</h1>}
      </div>
    </div>
  );
};

export default FavCards;
