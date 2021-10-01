import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";


const Details = ({id}) => {
  const [results, setResults] = useState([]);

  const endPoint = "https://api.foursquare.com/v2/venues/4d56aefb9e508cfa9400119b/photos";
  const parameters = {
    client_id: "RQC4IDOHUHLUA1USD31JQPHKLURB1GF4NSAWXVT5SEEMVSTB",
    client_secret: "CCTKTN053MPHO2WPLJS5SOZGNGAAQSO3KRMAXQZ1MPCQTWYO",
    v: "20210928",

  };

  useEffect(() => {
    axios
      .get(endPoint + new URLSearchParams(parameters))
      .then((response) => {
        setResults(Object.values({ ...response.data.response.venues }));
      })
      .catch((err) => console.error(err));
  }, []);

  console.log(results);

  return (
    <div id='all'>
    <Navbar />
    </div>
  );
};

export default Details;
