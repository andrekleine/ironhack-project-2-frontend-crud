import axios from "axios";
import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Favbar from "./Favbar";
import OneCard from "./OneCard";

const FavCards = (props) => {
  const [collection, setCollection] = useState([]);
  const { user, category } = props.match.params;

  useEffect(() => {
    axios
      .get(
        `https://ironrest.herokuapp.com/findAll/meusFavoritos?user=${user}&category=${category}`
      )
      .then((response) => {
        setCollection([...response.data]);
      })
      .catch((err) => console.error(err));
  }, [category, user]);

// console.log(collection);

  return (
    <div>
      <Navbar />
      <Favbar category={category} />
      <div className="container-fluid" style={{ marginTop: "100px" }}>
        {collection.length ? (
          collection.map((venueObj) => {
            const targetObj = venueObj.venue;
            return (
              <OneCard
                key={venueObj._id}
                image={targetObj.imageSrc}
                name={targetObj.name}
                address={targetObj.address}
                city={targetObj.city}
                country={targetObj.country}
                rating={targetObj.rating}
                id={venueObj._id}
                category={category}
                user={user}
                comment={venueObj.yourComment}
                phone={targetObj.phone}
                priceTier={targetObj.priceTier}
              />
            );
          })
        ) : (
          <h1>Voce ainda nao adicionou Favoritos a esta categoria</h1>
        )}
      </div>
    </div>
  );
};

export default FavCards;
