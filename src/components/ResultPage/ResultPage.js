import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./ResultPage.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import CardComment from "../Card/CardComment";

const ResultPage = (props) => {
  const [results, setResults] = useState([]);



  console.log(props);
  useEffect(() => {
    const endPoint = "https://api.foursquare.com/v2/venues/search?";
    const param = {
      client_id: "DQCEDNDNFU2MTEZYJA54SQWTMAGVF55RVTJWPZB4G1EM5BEE",
      client_secret: "XRZZLSD0DFBCCBP2TRLG1UZTOUAWTUY5ANRMAATAV2ABOV0I",
      v: "20210928",
      near: props.location.state.near,
      query: props.location.state.query,
    };

    axios
      .get(endPoint + new URLSearchParams(param))
      .then((response) => {
        setResults(Object.values({ ...response.data.response.venues }));
      })
      .catch((err) => console.error(err));
  }, [props.location.state.near, props.location.state.query]);

  return (
    <div id="all">
      <Navbar />
      <div style={{ height: "50px" }}></div>
      <div className="insideMap ">
        {results.map((x) => {
          return (
            <div key={x.id}>
              <Link
                to={`/details/${x.id}`}
                style={{ textDecoration: "none" }}
                className="container-fluid"
              >
                <CardComment
                  title={x.name}
                  text1={x.location.address}
                  text2={x.location.city}
                />
              </Link>
            </div>
          );
        })}
      </div>
      <Link to={`/add-local`}>
        <div className="position-fixed top-100 start-50 translate-middle mb-5 container-fluid">
          <div className="card border-success mb-4">
            <div className="card-body bg-warning p-0 text-dark bg-opacity-50">
              <h5 className="card-title">Adicionar novo local + </h5>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ResultPage;
