import React from "react";
import { Card } from "react-bootstrap";

const CardComment = ({ text1, text2 }) => {
  return (
    <div className="card border-success mb-2 mx-1">
      <Card.Body className="h-100 d-inline-block w-auto p-0">
        <div className="bg-success p-1 text-dark bg-opacity-10 ">
              <blockquote className="blockquote mb-0">
            <p> {text1} </p>
            <footer className="blockquote-footer">
              <cite title="Source Title"> {text2}</cite>
            </footer>
          </blockquote>
        </div>
      </Card.Body>
    </div>
  );
};

export default CardComment;
