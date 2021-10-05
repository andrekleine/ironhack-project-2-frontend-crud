import { useState, useEffect, React } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import image from "./categoryImagePlaceHolder.png";
import Rating from "./Rating/Rating";
import { Link } from "react-router-dom";
import Price from "./Price/Price";
import Comments from "./Comments/Comments";
import AddFav from "../AddFav/AddFav";


const Details = (props) => {
  console.log('Details, user: ', props.user);
  
  const [comments, setComments] = useState([]);
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
    urlVenue: "",
    user:"",
    // priceTier: 0,
  });

  useEffect(() => {
    const endPoint = `https://api.foursquare.com/v2/venues/${props.match.params.id}?`;
    const parameters = {
      client_id: "DQCEDNDNFU2MTEZYJA54SQWTMAGVF55RVTJWPZB4G1EM5BEE",
      client_secret: "XRZZLSD0DFBCCBP2TRLG1UZTOUAWTUY5ANRMAATAV2ABOV0I",
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
          // priceTier: response.data.response.venue.price.tier.length ? response.data.response.venue.price.tier : '',
        });
        setComments([...response.data.response.venue.tips.groups[0].items]); 
      })
      .catch((err) => console.error(err));
  }, [props.match.params.id]);

  //console.log(comments)

  return (
    <div id="all ">
      <Navbar />
      <div className="card border-success m-2 mt-5">
        <div className="card-body bg-warning p-2 text-dark bg-opacity-10 ">
          <div className="category">
            <img
              src={results.categoryImage}
              alt={results.name}
              style={{ width: 100, height: 100 }}
            />
          </div>
          <h3>{results.name} </h3>
          <Rating>{results.rating}</Rating>
          <p>telefone: {results.phone} </p>
          <Price>{results.priceTier}</Price>

          <Link to={results.urlVenue ? results.urlVenue : "www.teste.com"}>
            <p>Entre no site da empresa aqui =D </p>
          </Link>
          <img className="mb-2"
            src={results.imageSrc}
            alt={results.name}
            style={{ width: 100, height: 100 }}
          />
          <Comments id={results.id} comments={comments} />
          <AddFav venue={results} user={props.user} />
        </div>
      </div>
    </div>
  );
};

export default Details;
