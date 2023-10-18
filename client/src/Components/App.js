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

//cakes state, it all starts here to display reviews.
const [cakes, setCakes] = useState([]);

  // put all cakes in state
  useEffect(() =>{
    fetch("/cakes")
    .then((r) => r.json())
    .then((r) => setCakes(r))
  }, [])

  function handleReview(newReview){
    //c stands for single cake
    const updatedCakes = cakes.map((c) => { 
     if(c.id === newReview.cake_id) {
        return ({ ...c, reviews: [...c.reviews, newReview] })
        } else {
        return c
        }
      }
    )
    setCakes(updatedCakes)
  }


  function handleDeleReview(deletedReview){
    // c stantands for cake and r stands for review
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
    // c stantands for cake and r stands for review
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

  
  // after making sure reviews were displayed along with cake cards, I worked on adding a cake  as an option from the Nav bar.
  function handleAddCake(newCake){
    setCakes([...cakes, newCake])
  }

  // over here, route in line 99 will handle most of the job done in this project.
  return (
    <div>
      <UserProvider>
        <NavBar />
          <Routes>
            <Route exact path="/login" element={ <Login  /> } />
               <Route exact path="/signup" element={ <SignUp  /> }/>
                  <Route exact path="/addCake" element={<CakeForm onAddCake={handleAddCake} />} />
               <Route exact path="/aboutUs" element = { <AboutUs /> } />
             <Route exact path="/cakesreviewed" element={ <CakeReviewed cakes={cakes}/>}/> 
           <Route exact path="/" element={ <Home cakes= {cakes} onAddReview={handleReview} onDeleteCake={handleDeleReview}  onUpdateCakeReview={handleUpdateReview} /> } />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;

