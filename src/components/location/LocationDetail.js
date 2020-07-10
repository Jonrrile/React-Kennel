import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'

const LocationDetail = props => {
  const [location, setLocation] = useState({ name: "" });

  useEffect(() => {
    //get(id) from LocationManager and hang on to the data; put it into state
    LocationManager.get(props.locationId)
      .then(location => {
        setLocation({
          name: location.name
        });
      });
  }, [props.locationId]);

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSaqreF5-knRJB1My7B5GZsQVSHOV2lCzVzlQ&usqp=CAU" alt="My Place" />
        </picture>
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{location.name}</span></h3>
      </div>
    </div>
  );
}

export default LocationDetail;