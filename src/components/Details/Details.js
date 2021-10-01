import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import image from "./categoryImagePlaceHolder.png";
import "./Details.css";
import Rating from "./Rating/Rating";
import { Link } from "react-router-dom";
import CardComment from "../Card/CardComment";
import Price from "./Price/Price";

const Details = (props) => {
  
  const [results, setResults] = useState({
    id: "",
    categoryImage: image,
    name: "",
    rating: 10,
    phone: "+55 11 998888888",
    imageSrc:
      "https://image.shutterstock.com/image-vector/photo-coming-soon-image-eps10-600w-86220151.jpg",
    tip: "",
    personTip: "",
    urlVenue: ",",
    priceTier: 0,
  });

  useEffect(() => {
    const endPoint = `https://api.foursquare.com/v2/venues/${props.match.params.id}?`;
    const parameters = {
      client_id: "DQCEDNDNFU2MTEZYJA54SQWTMAGVF55RVTJWPZB4G1EM5BEE",
      client_secret: "YCYCZ3VML3UKU2EFFYTI253CC1EZ4O4LVYJ410HPLE0NADMV",
      v: "20210930",
    };

    axios
      .get(endPoint + new URLSearchParams(parameters))
      .then((response) => {
        setResults({
          id: props.match.params.id,
          categoryImage:
            response.data.response.venue.categories[0].icon.prefix +
            64 +
            response.data.response.venue.categories[0].icon.suffix,
          name: response.data.response.venue.name,
          rating: response.data.response.venue.rating,
          phone: response.data.response.venue.contact.formattedPhone,
          imageSrc:
            response.data.response.venue.bestPhoto.prefix +
            "100x100" +
            response.data.response.venue.bestPhoto.suffix,
          tip: response.data.response.venue.tips.groups[0].items[0].text,
          personTip:
            response.data.response.venue.tips.groups[0].items[0].user.firstName,
          urlVenue: response.data.response.venue.url,
          priceTier: response.data.response.venue.price.tier,
        });
      })
      .catch((err) => console.error(err));
  }, [props.match.params.id]);

  return (
    <div id="all ">
      <Navbar />
      <div className='card border-success m-2 mt-5'>
      <div className='card-body bg-warning p-2 text-dark bg-opacity-10 '>
      <div className="category">
        <img
          src={results.categoryImage}
          alt={results.name}
          style={{ width: 100, height: 100 }}
        />
      </div>
      <h3>{results.name} </h3>
      <Rating>{results.rating}</Rating>
      <p>**Aqui eu fiz isso, porém podemos apresentar também 7/10 para ficar menor ou algo assim, você é o cara do design, fique a vonts**</p>
      <p>telefone: {results.phone} </p>
     <Price>{results.priceTier}</Price> 
      <Link
        to={`/details/${results.id}/comments`}
        style={{ textDecoration: "none" }}
        className="container-fluid"
      >
        <CardComment text1={results.tip} text2={results.personTip} />
      </Link>

      <Link to={results.urlVenue ? results.urlVenue : "www.teste.com"}>
        <p>Entre no site da empresa aqui =D </p>
      </Link>
      <img
        src={results.imageSrc}
        alt={results.name}
        style={{ width: 100, height: 100 }}
      />
      </div>
      </div>
    </div>
  );
};

export default Details;
