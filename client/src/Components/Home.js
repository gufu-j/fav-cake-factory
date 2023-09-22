import React from "react";
import CakeCards from "./CakeCards";



function Home({ user, cakes}){



    if (user) {
        let cakeCards = cakes.map((cake) => (
            <CakeCards 
            key={cake.id}
            cake={cake}
            />
        ))
    return( 
    <div>
    <h1> Welcome, {user.username}! </h1>
    {cakeCards}
    </div>
    
    );
    } else {
    return(
        <h1> Please Login or Sign Up</h1>
        )}
}

export default Home