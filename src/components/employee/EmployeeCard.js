import React from "react";


//This is a child element of Kennel but is where our representation for the cards resides
const EmployeeCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/38975604_10156685269659954_3518690118032424960_o.jpg?_nc_cat=1&_nc_sid=09cbfe&_nc_ohc=xcuuCEwjJ-MAX_KH18J&_nc_ht=scontent-atl3-1.xx&oh=91b588e48bec3857e6f1c56fd08aed9f&oe=5F2C82E4" alt="My Place" />
        </picture>
        <h3>
          Store Employee: <span className="card-owner">{props.employee.name}</span>
        </h3>
      </div>
    </div>
  );
};

export default EmployeeCard;