import React, { useState, useEffect } from 'react';
//import the components we will need
import LocationCard from './LocationCard';
import LocationManager from '../../modules/LocationManager';


const LocationList = (props) => {
  // The initial state is an empty array
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    // After the data comes back from the API, we
    //  use the setLocations function to update state
    return LocationManager.getAll().then(locationsFromAPI => {
      setLocations(locationsFromAPI)
    });
  };
  const deleteLocation = id => {
    LocationManager.delete(id)
      .then(() => LocationManager.getAll().then(setLocations));
  };


  // got the animals from the API on the component's first render
  useEffect(() => {
    getLocations();
  }, []);
console.log({...props})
  // Finally we use map() to "loop over" the animals array to show a list of animal cards
  return (
    <>
    <div>
     
    <section className="section-content">
      <button type="button"
      className="btn"
      onClick={() => {props.history.push("/locations/new")}}>
        New Location
      </button>
    </section>
    <div className="container-cards">
      {locations.map(location => 
      <LocationCard 
      key={location.id} 
      name={location.name} 
      place={location}
      deleteLocation={deleteLocation}
      {...props} 
      />)}
    </div>
    </div>
    </>
  );
};
export default LocationList