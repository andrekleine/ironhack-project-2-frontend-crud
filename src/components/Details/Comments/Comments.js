import {React, useState, useEffect} from 'react';
import CardComment from '../../Card/CardComment';
import axios from 'axios';

const Comments = (props) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const endPoint = `https://api.foursquare.com/v2/venues/${props.match.params.id}?`;
        const parameters = {
          client_id: "DQCEDNDNFU2MTEZYJA54SQWTMAGVF55RVTJWPZB4G1EM5BEE",
          client_secret: "YCYCZ3VML3UKU2EFFYTI253CC1EZ4O4LVYJ410HPLE0NADMV",
          v: "20210930",
        };
    
        axios
          .get(endPoint + new URLSearchParams(parameters))
          .then((response) => {
            setComments([...response.data.response.venue.tips.groups[0].items]); 
          })
          .catch((err) => console.error(err));
      }, [props.match.params.id]);

  return (
    <div className="Comments">
    <div className="Comments"> Aqui todos os comentários </div>
      {comments.map((each) => {
        return(
        <div key={each.id}>
            <CardComment text1={each.text} text2={each.user.firstName} />
        </div>
    );
    })}  
    </div>
  );
};

export default Comments;