import React from "react";
import AnimalCard from "./animal/AnimalCard";
import OwnerCard from "./owner/OwnerCard"
import EmployeeCard from "./employee/EmployeeCard"
import LocationCard from "./location/LocationCard"
import "./Kennel.css";


// your function that returns HTML representation similar to how we have done before except this
// is considered JSX.
const Kennel = () => {
    return (
        <div>
        <div>
            <div>
                <div>
                    <div>
                        <h2>
                            Student Kennels
        <br />
                            <small>Loving care when you're not there.</small>
                        </h2>
                        <address>
                            Visit Us at the Nashville North Location
        <br />
        500 Puppy Way
      </address>
                    </div>
                    {/* you have to wrap other container elements in divs. This is the child to Kennel */}
                    <div className="container-cards">
                        <AnimalCard />
                        <AnimalCard />
                        <AnimalCard />
                    </div>
                    <div className="container-cards">
                        <LocationCard />
                        <LocationCard />
                        <LocationCard />
                    </div>
                    <div className="container-cards">
                        <OwnerCard />
                        <OwnerCard />
                        <OwnerCard />
                    </div>
                    <div className="container-cards">
                        <EmployeeCard />
                        <EmployeeCard />
                        <EmployeeCard />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Kennel;