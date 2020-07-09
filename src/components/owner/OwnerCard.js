import React from "react";


//This is a child element of Kennel but is where our representation for the cards resides
const OwnerCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuJOWQVbXDtFB52wJJV6qjxm5wFR-ENBsNnA&usqp=CAU" alt="My Place" />
        </picture>
        <h3>
          Business Owner: <span className="card-owner">{props.owner.name}</span>
        </h3>
        <p>{props.owner.phone}</p>
      </div>
    </div>
  );
};

export default OwnerCard;