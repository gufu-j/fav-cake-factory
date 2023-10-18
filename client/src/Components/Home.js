import React, { useContext } from "react";
import { UserContext } from "./context/user";
import Cakes from './Cakes';


function Home({cakes, onAddReview, onDeleteCake, onUpdateCakeReview}){

    const { user, loggedIn} = useContext(UserContext)
    
    //if user has logged in, go ahead and let it have access to cakes, and otherfeatures.
    if (loggedIn) {
        return( 
            <div>
                <h2> @{user.username}'s Home Page </h2>
                 <Cakes cakes= {cakes} onAddReview={onAddReview} onDeleteCake={onDeleteCake} onUpdateCakeReview={onUpdateCakeReview}/>
            </div>
        );
        } else {  //if user has not logged in, let him/her see cakes, but don't let him add reviews
             return(
                <div>
                     <div className="intro">
                        <h1> InstaCake  🍰 </h1>
                            <Cakes cakes= {cakes} onAddReview={onAddReview} onDeleteCake={onDeleteCake}/>
                        </div> 
                </div>
            )
        }
}

export default Home


