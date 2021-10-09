import React, { useState } from "react";
import "./OneCard.css";
import Rating from "../Details/Rating/Rating";
import DelFav from "./DelFav";

const OneCard = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <div className="card mt-1 mb-1" style={{ width: "22rem" }}>
        <div className="title">
          <h5 className="card-title mb-0">{props.name}</h5>
        </div>
        <div className="info">
          <div className="photo-container">
            <img
              className="card-img-top img-fluid"
              src={props.image}
              alt="..."
            />
          </div>
          <div className="card-body">
            <div className="rating">
              <Rating>{props.rating}</Rating>
            </div>
            <div className="address">
              <Rating>{props.address}</Rating>
            </div>            
            <div className="del">
              <span onClick={handleClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="red"
                  className="bi bi-trash-fill float-left"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        <DelFav onClick={handleClick} category={props.category} id={props.id} />
      ) : null}
    </div>
  );
};

export default OneCard;
