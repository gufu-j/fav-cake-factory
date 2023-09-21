import './App.css';
import React, { useEffect, useState } from 'react';
import {Route, Routes} from "react-router-dom";

// Step One : Involves SignIn SetUp
import NavBar from './NavBar';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';

//Step Two : user interaction was logged in.

import MyCakes from './MyCakes';

function App() {

  // stay logged in 
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r)=> {
      if(r.ok){
        console.log(r)
        r.json().then((user) => setUser(user));
      }
    });
  }, [])

console.log(user)


const [cakes, setCakes] = useState([]);

useEffect(() =>{
  fetch("/cakes")
  .then((r) => r.json())
  .then(setCakes)
}, [])

console.log(cakes)



  return (
    <div>
      <NavBar user={ user } setUser={ setUser }/>
        {user ? (
          <Routes>
            <Route path="/" element={ <Home user={user}/> } />
            <Route path="/MyCakes" element= {<MyCakes />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/login" element={ <Login setUser={setUser} /> } />
            <Route path="/signup" element={ <SignUp setUser={setUser} /> }/>
            <Route path="/" element={ <Home/> } />
        </Routes>
        )}
    </div>
  );
}

export default App;
