import React from "react";
import { Link } from "react-router-dom";


//This is a child element of Kennel but is where our representation for the cards resides
const LocationCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSaqreF5-knRJB1My7B5GZsQVSHOV2lCzVzlQ&usqp=CAU" alt="My Place" />
        </picture>
        <h3>
          Kennel: <span className="card-location">{props.location.name}</span>
        </h3>
        <p>Address: {props.location.address}</p>
        <button type="button" onClick={() => props.deleteLocation(props.location.id)}>Close Location</button>
        <Link to={`/locations/${props.location.id}`}>
  <button>Details</button>
  <button type="button" onClick={() => props.history.push(`/locations/${props.location.id}/edit`)}>
    Edit
  </button>
</Link>
      </div>
    </div>
  );
};

export default LocationCard;