import React, { useState } from 'react';
import OwnerManager from '../../modules/OwnerManager';
import './OwnerForm.css'

const OwnerForm = props => {
    const [owner, setOwner] = useState({ name: "", phone: ""})
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...owner};
        stateToChange[evt.target.id] = evt.target.value;
        setOwner(stateToChange);
    };

    const constructNewOwner = evt => {
        evt.preventDefault();
        if (owner.name === "") {
            window.alert("Please fill out the name field");
        } else {
            setIsLoading(true);
            OwnerManager.post(owner)
            .then(() => props.history.push("/owners"))
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
                placeholder="Owner name"
                />
                <label htmlFor="name">Name</label>
            </div>
            <div className="formgrid">
                <input
                type="text"
                required
                onChange={handleFieldChange}
                id="phone"
                placeholder="Owner number"
                />
                <label htmlFor="name">Phone Number</label>
            </div>
            <div className="alignRight">
                <button
                type="button"
                disabled={isLoading}
                onClick={constructNewOwner}
                >Submit</button>
            </div>
        </fieldset>
    </form>
    </>
)
}

export default OwnerForm