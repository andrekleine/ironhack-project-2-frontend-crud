import React from 'react';

const CardComment = ( {text1, text2, title} ) => {
  
  return (
    <div className="card border-success mb-2 mx-1">
    <div className="card-body bg-success p-2 text-dark bg-opacity-10 ">
     <div className="mb-0 mt-0" >
     {title ? <h6>{title}</h6> : null } 
     <h6>"{text1}" - {text2}</h6> 
     </div>
   </div>
 </div>
  );
};

export default CardComment;