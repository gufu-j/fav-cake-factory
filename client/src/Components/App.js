import './App.css';
import React, { useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";

//global domination
import { UserProvider } from './context/user';


// Step One : Involves SignIn SetUp
import NavBar from './NavBar';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';

//Step Two : user interaction was logged in.
import Cakes from './Cakes';


function App() {


const [cakes, setCakes] = useState([]);

useEffect(() =>{
  fetch("/cakes")
  .then((r) => r.json())
  .then((r) => setCakes(r))
}, [])

console.log(cakes)

// console.log(cakes)
// console.log(cakes[0].users)



  return (
    <div>
      <UserProvider>
      <NavBar />
          <Routes>
            <Route exact path="/login" element={ <Login  /> } />
            <Route exact path="/signup" element={ <SignUp  /> }/>
            <Route exact path="/" element={ <Home cakes= {cakes} /> } />
            {/* <Route exact path="/cakes" element={ <Cakes cakes= {cakes} /> } /> */}
            {/* <Route exact path="/" element={ <Home /> } /> */}
            {/* <Route exact path="/MyCakes" element= {<MyCakes />} /> */}
        </Routes>
        </UserProvider>
    </div>
  );
}

export default App;
