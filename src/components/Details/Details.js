import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar";


const Details = ({id}) => {
  const [results, setResults] = useState([]);

  const endPoint = "https://api.foursquare.com/v2/venues/4bf083fe24f020a1b036684f?";
  const parameters = {
    client_id: "RQC4IDOHUHLUA1USD31JQPHKLURB1GF4NSAWXVT5SEEMVSTB",
    client_secret: "CCTKTN053MPHO2WPLJS5SOZGNGAAQSO3KRMAXQZ1MPCQTWYO",
    v: "20210930",

  };

  useEffect(() => {
    axios
      .get(endPoint + new URLSearchParams(parameters))
      .then((response) => {
          console.log(response)
         setResults(response.data.response.venue);
      })
      .catch((err) => console.error(err));
  }, []);

 console.log(results);
  //console.log(results[1])
  const name = results.name;
  const rating = results.rating;
  const imageSrc = results.bestPhoto.prefix + '300x400' + results.bestPhoto.suffix;
  const phone = results.contact.formattedPhone;

  console.log(name);
  console.log(imageSrc)
  //console.log(phone.formattedPhone);

  return (
    <div id='all'>
  {/*   <Navbar /> */}
    <h3>name: {name} </h3>
    <h3>rating: {rating} </h3>
     <img src={imageSrc} alt={name} /> 
     <h3>telefone: {phone} </h3>
    </div>
  );
};

export default Details;
