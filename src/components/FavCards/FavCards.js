import axios from "axios";
import React, { useState, useEffect } from "react";

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
    
      
    </div>
  );
};

export default FavCards;
