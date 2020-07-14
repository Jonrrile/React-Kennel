// import React, { useState, useEffect } from "react"
// import EmployeeManager from "../../modules/EmployeeManager"
// import "./EmployeeForm.css"
// import EmployeeManager from "../../modules/EmployeeManager";

// const EmployeeEditForm = props => {
//     const [employee, setEmployee] = useState({ name: ""});
//     const [isLoading, setIsLoading] = useState(false);

//     const handleFieldChange = evt => {
//         const stateToChange = {...employee };
//         stateToChange[evt.target.id] = evt.target.value;
//         setEmployee(stateToChange);
//     };

//     const updateExistingEmployee = evt => {
//         evt.preventDefault()
//         setIsLoading(true);

//         const editedLocation = {
//             id: props.match.params.employeeId,
//             name: employee.name
//         };

//         EmployeeManager.update(editedEmployee)
//         .then(() => props.history.push("/employee"))
//     }

//     useEffect(() => {
//         EmployeeManager.get(props.match.params.employeeId)
//         .then(employee => {
//             setEmployee(employee);
//             setIsLoading(false);
//         });
//     }, []);
    
//     return (
//         <>
//         <form>
//             <fieldset>
//                 <div className="formgrid">
//                     <input
//                     type="text"
//                     required
//                     className="form-control"
//                     onChange={handleFieldChange}
//                     id="name"
//                     value={employee.name}
//                     />
//                     <label htmlFor="name">Employee Name</label>
                    
//                     <button
//               type="button" disabled={isLoading}
//               onClick={updateExistingAnimal}
//               className="btn btn-primary"
//             >Submit</button>
//                 </div>
//             </fieldset>
//         </form>
//         </>
//     )}

//     export default EmployeeEditForm
