import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
//only include these once they are built - previous practice exercise
import OwnerList from "./owner/OwnerList";
import AnimalList from "./animal/AnimalList"
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./location/LocationList"
import AnimalDetail from "./animal/AnimalDetail"
import LocationDetail from "./location/LocationDetail"
import AnimalForm from "./animal/AnimalForm"
import LocationForm from "./location/LocationForm"
import EmployeeForm from "./employee/EmployeeForm"
import OwnerForm from "./owner/OwnerForm"
import Login from "./auth/Login"
import AnimalEditForm from "./animal/AnimalEditForm"
import EmployeeEditForm from "./employee/EmployeeEditForm";
import EmployeeWithAnimals from "./employee/EmployeeWithAnimals"
import OwnerEditForm from "./owner/OwnerEditForm"
import LocationEditForm from "./location/LocationEditForm"


const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

const ApplicationViews = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;
  return (
    <React.Fragment>
      <Route path="/login" render={props => {
    return <Login setUser={setUser} {...props} />
  }} />
      <Route
        exact
        path="/home"
        render={props => {
          return <Home {...props}/>;
        }}
      />
      {/* Make sure you add the `exact` attribute here */}
<Route exact path="/animals" render={(props) => {
  if (hasUser) {
  return <AnimalList {...props}/>
  } else {
    return <Redirect to="/login" />
  }
}} />
<Route 
exact path="/animals/:animalId(\d+)" 
render={(props) => {
  // Pass the animalId to the AnimalDetailComponent
  if (isAuthenticated()) {
  return <AnimalDetail animalId={parseInt(props.match.params.animalId)}
  {...props}/> } else {
    return <Redirect to="/login" />
  }
}} />

<Route exact path="/animals/new" render={(props) => {
  return <AnimalForm {...props} />
}} />

<Route exact path="/animals/:animalId(\d+)/edit" render={props => {
  if (isAuthenticated()) {
    return <AnimalEditForm {...props} />
  } else {
    return <Redirect to="/login" />
  }
}} />


{/*
  This is a new route to handle a URL with the following pattern:
  http://localhost:3000/animals/1

  It will not handle the following URL because the `(\d+)`
  matches only numbers after the final slash in the URL
  http://localhost:3000/animals/jack
*/}
      {/* Make sure you add the `exact` attribute here */}
<Route exact path="/locations" render={props => {
  if (isAuthenticated()) {
    return <LocationList {...props}/>
    } else {
      return <Redirect to="/login" />
    }
}} />
<Route exact path="/locations/:locationId(\d+)" render={(props) => {
  // Pass the animalId to the AnimalDetailComponent
  if (isAuthenticated()) {
    return <LocationDetail 
  locationId={parseInt(props.match.params.locationId)}
  {...props}/> } else {
    return <Redirect to="/login" />
  }
}} />
<Route exact path="/locations/new" render={(props) => {
  return <LocationForm {...props} />
}}/>
<Route exact path="/locations/:locationId(\d+)/edit" render={props => {
  if (isAuthenticated()) {
    return <LocationEditForm {...props} />
  } else {
    return <Redirect to="/login" />
  }
}} />
      <Route
       exact path="/owners"
        render={(props) => {
          if (isAuthenticated()) {
            return <OwnerList {...props}/>
            } else {
              return <Redirect to="/login" />
            }
        }}
      />
      <Route path="/owners/new" render={(props) => {
        return <OwnerForm {...props} />;
      }}
      />
      <Route path="/owners/:ownerId(\d+)/edit" render={props => {
  if (isAuthenticated()) {
    return <OwnerEditForm {...props} />
  } else {
    return <Redirect to="/login" />
  }
}} />
      <Route
         exact path="/employees"
        render={(props) => {
          if (isAuthenticated()) {
            return <EmployeeList {...props}/>
            } else {
              return <Redirect to="/login" />
            }
        }}
      />
      <Route exact path="/employees/new" render={(props) => {
        return <EmployeeForm {...props} />
      }}/>
      <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
        return <EmployeeWithAnimals {...props} />
      }} />
   <Route path="/employees/:employeeId(\d+)/edit" render={props => {
  if (isAuthenticated()) {
    return <EmployeeEditForm {...props} />
  } else {
    return <Redirect to="/login" />
  }
}} />
      
    </React.Fragment>
  );
};

export default ApplicationViews;