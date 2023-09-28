import React, { useContext } from "react";

// import CakeCards from "./CakeCards";
import { UserContext } from "./context/user";



function Home({}){

    const { user, loggedIn } = useContext(UserContext)


    console.log(loggedIn)

    if (loggedIn) {
        return( 
            <div>
             <h2> {user.username}'s Home Page </h2>
            </div>
                );
            } else {
                return(
                    <div>
                         <h1> Please Login or Signup </h1>
                         {/* {cakeCards} */}
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

