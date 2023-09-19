import './App.css';
import React, { useEffect, useState } from 'react';
import {Route, Routes} from "react-router-dom";

// Step One : Involves SignIn SetUp
import NavBar from './NavBar';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r)=> {
      if(r.ok){
        r.json().then((user) => setUser(user));
      }
    });
  }, [])

console.log(user)
  return (
    <div>
      <NavBar user={ user } setUser={ setUser }/>
        {user ? (
          <Routes>
            <Route path="/" element={ <Home user={user}/> } />
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
