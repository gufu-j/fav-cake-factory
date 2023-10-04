import React, { useContext } from "react";
import { UserContext } from "./context/user";
import Cakes from './Cakes';
// import { Link } from "react-router-dom";
// import CakeForm from "./CakeForm";


function Home({cakes}){

    const { user, loggedIn} = useContext(UserContext)

    if (loggedIn) {
        return( 
            <div>
             <h2> {user.username}'s Home Page </h2>
             <Cakes cakes= {cakes}/>
            </div>
                );
            } else {
                return(
                    <div className="intro">
                        <h1> InstaCake  🍰 </h1>
                        <p>. . . an app for cake lovers</p>
                         <h2> Please Login or Signup</h2>
                     </div> 
    )}
}

export default Home


