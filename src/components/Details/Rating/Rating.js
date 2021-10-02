import React from 'react';

const Rating = ({ children }) => {
  let star = '★'.repeat(Math.round(children / 2)) + '✰'.repeat(5 - Math.round(children / 2));

  return (
    <div className="RatingAll">
    <div className="rating"> {star} </div>
    </div>
  );
};

export default Rating;