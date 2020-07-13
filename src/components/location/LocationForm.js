import React, { useState } from 'react';
import './LocationForm.css'
import LocationManager from '../../modules/LocationManager';

const LocationForm = props => {
    const [location, setLocation] = useState({ name: "", address: ""});
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...location };
        stateToChange[evt.target.id] = evt.target.value;
        setLocation(stateToChange);
    };

    const constructNewLocation = evt => {
        evt.preventDefault();
        if (location.name === "") {
            window.alert("Please input a location")
        } else {
            setIsLoading(true);
            LocationManager.post(location)
            .then(() => props.history.push("/locations"))
        }
    };

    return (
        <>
        <form>
            <fieldset>
                <div className="formgrid">
                    <input 
                    type="text"
                    required
                    onChange={handleFieldChange}
                    id="name"
                    placeholder="Location name"
                    />
                    <label htmlFor="name">Location</label>
                    
                    
                        <input
                        type="text"
                        required
                        onChange={handleFieldChange}
                        id="address"
                        placeholder="Location address"
                        />
                        <label htmlFor="address">Address</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={isLoading}
                        onClick={constructNewLocation}
                        >Submit</button>
                </div>
            </fieldset>
        </form>
        </>
    )
}

export default LocationForm;