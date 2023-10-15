import './App.css';
import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";

import { UserProvider } from './context/user';
import NavBar from './NavBar';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import CakeForm from './CakeForm';
import AboutUs from './AboutUs';
import CakeReviewed from './CakeReviewed';





function App() {

const [cakes, setCakes] = useState([]);


  useEffect(() =>{
    fetch("/cakes")
    .then((r) => r.json())
    .then((r) => setCakes(r))
  }, [])


  function handleAddCake(newCake){
    setCakes([...cakes, newCake])
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
    // console.log(deletedReview)
    const cakeReviewList = cakes.find(c => c.id === deletedReview.cake_id).reviews

    const updatedReviews= cakeReviewList.filter((r) => r.id !== deletedReview.id)
  
    const updatedCakes = cakes.map((c) => {
      if(c.id === deletedReview.cake_id){
        return {...c, reviews: updatedReviews}
        }else{
        return c;
      }
     }
    )
    setCakes(updatedCakes)

  }


  function handleUpdateReview(updatedReview){

    // console.log(updatedReview)

    const cakeReviews = cakes.find(c => c.id === updatedReview.cake_id).reviews

    const updatedReviews = cakeReviews.map((r) => {
      if(r.id === updatedReview.id){
        return updatedReview
      }else{
        return r;
      }
    });

   const updatedCakes = cakes.map((c) => {
      if(c.id === updatedReview.cake_id){
        return {...c, reviews:updatedReviews}
        }else{
        return c;
      }
     }
    )

    setCakes(updatedCakes)
  }

  return (
    <div>
      <UserProvider>
      <NavBar />
          <Routes>
            <Route exact path="/login" element={ <Login  /> } />
            <Route exact path="/signup" element={ <SignUp  /> }/>
            <Route exact path="/addCake" element={<CakeForm onAddCake={handleAddCake} />} />
            <Route exact path="/" element={ <Home cakes= {cakes} onAddReview={handleReview} onDeleteCake={handleDeleteCake}  onUpdateCakeReview={handleUpdateReview} /> } />
            <Route exact path="/aboutUs" element = { <AboutUs /> } />
            <Route exact path="/cakesreviewed" element={ <CakeReviewed cakes={cakes}/>}/>
        </Routes>
        </UserProvider>
    </div>
  );
}

export default App;

