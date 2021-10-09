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
  const [comments, setComments] = useState([
    {
      id: "123456789-commentID",
      text: "nenhuma dica aqui ainda",
      user: { firstName: "seja o primeiro" },
    },
  ]);
  const [results, setResults] = useState({
    id: "",
    categoryImage: { image },
    name: "",
    rating: 10,
    phone: "+55 11 998888888",
    imageSrc:
      "https://image.shutterstock.com/image-vector/photo-coming-soon-image-eps10-600w-86220151.jpg",
    tip: "",
    personTip: "",
    urlVenue: "",
    user: "",
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
        const targetObj = response.data.response.venue;

        setResults({
          id: props.match.params.id,

          name: targetObj.name,
          rating: targetObj.rating ? targetObj.rating : 11,

          imageSrc: targetObj.bestPhoto
            ? targetObj.bestPhoto.prefix +
              "100x100" +
              targetObj.bestPhoto.suffix
            : "https://image.shutterstock.com/image-vector/photo-coming-soon-image-eps10-600w-86220151.jpg",
          tip:
            targetObj.tips.groups.length > 0
              ? targetObj.tips.groups[0].items[0].text
              : "não existe",

          categoryImage: targetObj.categories[0].icon.prefix
            ? targetObj.categories[0].icon.prefix +
              64 +
              targetObj.categories[0].icon.suffix
            : image,

          phone: targetObj.contact.formattedPhone
            ? targetObj.contact.formattedPhone
            : "",

          personTip:
            targetObj.tips.groups.length > 0
              ? targetObj.tips.groups[0].items[0].user.firstName
              : "nooon",
          urlVenue: targetObj.url,
          priceTier: targetObj.price ? targetObj.price.tier : "",
        });
        setComments(
          targetObj.tips.groups.length > 0
            ? [...targetObj.tips.groups[0].items]
            : comments
        );
      })
      .catch((err) => console.error(err));
  }, [props.match.params.id]);

  return (
    <div id="all ">
      <Navbar />
      <div className="card border-success m-2 mt-5">
        <div className=" bg-success p-2 text-dark bg-opacity-10 ">
          <div className="d-flex align-items-center">
            <img
              src={results.categoryImage}
              alt={results.name}
              style={{ width: 100, height: 100 }}
            />

            <h5 className="mt-3">{results.name} </h5>
          </div>
          <Rating>{results.rating}</Rating>
          <p> {results.phone} </p>
          <Price>{results.priceTier}</Price>

          <Link
            to={
              results.urlVenue
                ? results.urlVenue
                : "Este local não possui website."
            }
          >
            <p>Entre no site da empresa aqui =D </p>
          </Link>
          <img
            className="mb-2"
            src={results.imageSrc}
            alt={results.name}
            style={{ width: 100, height: 100 }}
          />
          <Comments id={results.id} comments={comments} />
          <AddFav venue={results} user={window.name} />
        </div>
      </div>
    </div>
  );
};

export default Details;
