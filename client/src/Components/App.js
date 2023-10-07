import './App.css';
import React, { useContext, useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";

//global domination
import { UserProvider } from './context/user';


// Step One : Involves SignIn SetUp
import NavBar from './NavBar';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import CakeForm from './CakeForm';
import Review from './Review';
// import ReviewCards from './ReviewCards';

//useContext & userContext

// import { UserContext } from "./context/user";



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

  function handleReview(newReview){

  const updatedCakes = cakes.map((c) => { 
    if(c.id === newReview.cake_id) {
      return ({
        ...c, reviews: [...c.reviews, newReview]
      })
    } else {
      return c
    }
  }
)
  setCakes(updatedCakes)
  }


  function handleDeleteCake(deletedReview){
    const cakeReviewList = cakes.find(c => c.id === deletedReview.cake_id).reviews
    const updatedReviews= cakeReviewList.filter((r) => r.id !== deletedReview.id)
    console.log(cakeReviewList)
    console.log(updatedReviews)
  }

  return (
    <div>
      <UserProvider>
      <NavBar />
          <Routes>
            <Route exact path="/login" element={ <Login  /> } />
            <Route exact path="/signup" element={ <SignUp  /> }/>
            <Route exact path="/addCake" element={<CakeForm onAddCake={handleAddCake} />} />
            <Route exact path="/" element={ <Home cakes= {cakes} onAddReview={handleReview} onDeleteCake={handleDeleteCake}/> } />
        </Routes>
        </UserProvider>
    </div>
  );
}

export default App;
