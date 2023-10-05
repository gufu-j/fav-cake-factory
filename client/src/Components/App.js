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
import CakeForm from './CakeForm';
// import ReviewCards from './ReviewCards';

function App() {
const [cakes, setCakes] = useState([]);

useEffect(() =>{
  fetch("/cakes")
  .then((r) => r.json())
  .then((r) => setCakes(r))
}, [])

function handleAddCake(newCake){
  console.log(...cakes, newCake)
}

  return (
    <div>
      <UserProvider>
      <NavBar />
          <Routes>
            <Route exact path="/login" element={ <Login  /> } />
            <Route exact path="/signup" element={ <SignUp  /> }/>
            <Route exact path="/addCake" element={<CakeForm onAddCake={handleAddCake}/>} />
            <Route exact path="/" element={ <Home cakes= {cakes} /> } />
        </Routes>
        </UserProvider>
    </div>
  );
}

export default App;
