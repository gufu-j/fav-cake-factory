import './App.css';
//import React, { useEffect, useState, useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import React from 'react';

//global domination
import { UserProvider } from './context/user';
// import { UserContext } from "./context/user";


// Step One : Involves SignIn SetUp
import NavBar from './NavBar';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';

//Step Two : user interaction was logged in.

// import MyCakes from './MyCakes';

function App() {

  // const { user } = useContext(UserContext)

  // console.log(user)

  // stay logged in 
  //   const [user, setUser] = useState(null);

  //   useEffect(() => {
  //     fetch("/me").then((r)=> {
  //       if(r.ok){
  //         console.log(r)
  //         r.json().then((user) => setUser(user));
  //       }
  //     });
  //   }, [])

  // console.log(user)


// const [cakes, setCakes] = useState([]);

// useEffect(() =>{
//   fetch("/cakes")
//   .then((r) => r.json())
//   .then((r) => setCakes(r))
// }, [])

// console.log(cakes)
// console.log(cakes[0].users)



  return (
    <div>
      <UserProvider>
      <NavBar />
          <Routes>
            <Route exact path="/login" element={ <Login  /> } />
            <Route exact path="/signup" element={ <SignUp  /> }/>
            <Route exact path="/" element={ <Home /> } />
            {/* <Route exact path="/" element={ <Home /> } /> */}
            {/* <Route exact path="/MyCakes" element= {<MyCakes />} /> */}

        </Routes>
        </UserProvider>
    </div>
  );
}

export default App;
