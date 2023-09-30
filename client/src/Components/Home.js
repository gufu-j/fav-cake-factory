import React, { useContext } from "react";


// import CakeCards from "./CakeCards";
import { UserContext } from "./context/user";
import Cakes from './Cakes';





function Home({cakes}){

    const { user, loggedIn } = useContext(UserContext)


    console.log(loggedIn)
    if (loggedIn) {
        return( 
            <div>
             <h2> {user.username}'s Home Page </h2>
             <Cakes cakes= {cakes} />
            </div>
                );
            } else {
                return(
                    <div>
                         <h1> Please Login or Signup </h1>
                         <Cakes cakes= {cakes} />
                     </div> 
    )}
}

export default Home

 // let cakeCards = cakes.map((cake) => (
        //     <CakeCards 
        //     key={cake.id}
        //     cake={cake}
        //     />
        // ))

