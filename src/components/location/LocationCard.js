import React from "react";


//This is a child element of Kennel but is where our representation for the cards resides
const LocationCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSaqreF5-knRJB1My7B5GZsQVSHOV2lCzVzlQ&usqp=CAU" alt="My Place" />
        </picture>
        <h3>
          Kennel: <span className="card-location">Charlotte Pike Poodles</span>
        </h3>
        <p>Address: 123 Charlotte Pike</p>
      </div>
    </div>
  );
};

export default LocationCard;