import React from 'react';

const Rating = ({ children }) => {
  let star = '★'.repeat(Math.round(children)) + '✰'.repeat(10 - Math.round(children));

  return (
    <div className="RatingAll">
    <div className="rating"> {star} </div>
    </div>
  );
};

export default Rating;