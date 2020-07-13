import React, { useState, useEffect } from "react";
import LocationManager from "../../modules/LocationManager";
import "./LocationDetail.css";

const LocationDetail = props => {
  const [location, setLocation] = useState({ name: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    LocationManager.get(props.locationId).then(location => {
      setLocation({
        name: location.name
      });
      setIsLoading(false);
    });
  }, [props.locationId]);
  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    LocationManager.delete(props.locationId).then(() =>
      props.history.push("/locations")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSaqreF5-knRJB1My7B5GZsQVSHOV2lCzVzlQ&usqp=CAU" alt="My Place" />
        </picture>
        <h3>
          Name: <span style={{ color: "darkslategrey" }}>{location.name}</span>
        </h3>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
      </div>
    </div>
  );
};

export default LocationDetail;