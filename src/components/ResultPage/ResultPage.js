import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./ResultPage.css"
import { Link } from "react-router-dom";

const ResultPage = ({ near, query }) => {
  const [results, setResults] = useState([]);
  const endPoint = "https://api.foursquare.com/v2/venues/search?";
  const parameters = {
    client_id: "RQC4IDOHUHLUA1USD31JQPHKLURB1GF4NSAWXVT5SEEMVSTB",
    client_secret: "CCTKTN053MPHO2WPLJS5SOZGNGAAQSO3KRMAXQZ1MPCQTWYO",
    v: "20210928",
    near: "São Paulo",
    query: "Pizzaria",
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
  <div style={{ height:'50px'}}></div>
      <div className='insideMap '> 
      {results.map((x) => {
        return (
          <div key={x.id}>
            <Link to={`/details/${x.id}`} style={{ textDecoration: 'none' }} className="container-fluid">
            <div className="card border-success mb-2 mx-1">
              {/* <img src="..." className="card-img-top" alt="..." /> */}
              <div className="card-body bg-success p-2 text-dark bg-opacity-10 ">
                <h5 className="card-title">{x.name}</h5>
                <p className="mb-0 mt-0" >
                  {x.location.address} {x.location.city}
                </p>
              </div>
            </div>
            </Link>
          </div>
        );
      })}
      </div>
      <Link to={`/add-local`} > 
      <div class="position-fixed top-100 start-50 translate-middle mb-4 container-fluid">
      <div className="card border-success mb-5" >
              <div className="card-body bg-success p-0 text-dark bg-opacity-50">
                <h5 className="card-title">Adicionar novo local + </h5>
              </div>
            </div>
      </div>
      </Link>
      <div className="info mt-4 position-fixed top-0 start-50 translate-middle container-fluid"> 
      <h1 className="card bg-success p-0 text-dark bg-opacity-50 " >RESULT PAGE TESTS!!!</h1>
      </div>
    </div>
  );
};

export default ResultPage;
