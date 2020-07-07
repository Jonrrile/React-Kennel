import React from "react";


//This is a child element of Kennel but is where our representation for the cards resides
const EmployeeCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src="https://lh3.googleusercontent.com/proxy/D8Wu4gDOsxHAxkv4hnnI2De-lar6t3QjPx7UZpoal4oN0VPlSgK4nmDaTMtKpx46lu1LW6ed5wxWzqu-92TXSTjdu5F1oLS0sOWcU-tAR8X_7FaTol8kpPce1a1sxDTODEqeFw" alt="My Place" />
        </picture>
        <h3>
          Store Employee: <span className="card-owner">Cesar Millan</span>
        </h3>
      </div>
    </div>
  );
};

export default EmployeeCard;