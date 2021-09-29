import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

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
    <div className='position-relative align-itens-center'>
      <h1>RESULT PAGE TESTS!!!</h1>
      <p>aqui estão os 30 mais próximos de você:</p>
      {results.map((x) => {
        return (
          <div key={x.id}>
            <a src='#' alt=''>
            <div className="card border-success mb-2" style={{ width: "16rem" }}>
              {/* <img src="..." className="card-img-top" alt="..." /> */}
              <div className="card-body bg-success p-2 text-dark bg-opacity-10 ">
                <h5 className="card-title">{x.name}</h5>
                <p className="fs-6 fw-light">
                  {x.location.address} {x.location.city}
                </p>
              </div>
            </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default ResultPage;
