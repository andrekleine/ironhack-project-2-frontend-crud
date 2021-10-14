import React, { useState } from "react";
import "./OneCard.css";
import Rating from "../Details/Rating/Rating";
import DelFav from "./DelFav";
import UpdateFav from "./UpdateFav";

const OneCard = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  console.log(props)
  const handleClick = () => {
    showModalUpdate ? setShowModal(false) : setShowModal(!showModal);
  };

  const handleClickUpdate = () => {
    showModal
      ? setShowModalUpdate(false)
      : setShowModalUpdate(!showModalUpdate);
  };

  return (
    <div className="container-fluid">
      <div className="card mt-1 mb-1">
        <div className="title">
          <h5 className="card-title mb-0">{props.name}</h5>
        </div>
        <div className="info">
          <div className="one-container">
            <img
              className="card-img-top img-fluid one-img"
              src={props.image}
              alt="..."
            />
          </div>
          <div className="card-body information">
            <div className="rating">
              <Rating>{props.rating}</Rating>
            </div>
            <div className="address">
              <Rating>{props.address}</Rating>
              <p>{props.comment}</p>
              <p></p>
            </div>
            <div className="del">
              <span className="del" onClick={handleClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="grey"
                  className="bi bi-trash-fill float-left"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                </svg>
              </span>
            </div>
            <div className="edit ">
              <p>Escreva seu comentário</p>

              <span onClick={handleClickUpdate}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="grey"
                  className="bi bi-pencil-filll float-left mb-1 mx-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        <DelFav onClick={handleClick} category={props.category} id={props.id} />
      ) : null}
      {showModalUpdate ? (
        <UpdateFav
          onClick={handleClickUpdate}
          category={props.category}
          id={props.id}
        />
      ) : null}
    </div>
  );
};

export default OneCard;
