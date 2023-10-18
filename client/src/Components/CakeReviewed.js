import React from "react";
import { useContext } from "react";
import { UserContext } from "./context/user";


function CakeReviewed(){


    const {user} = useContext(UserContext)
    const theCakes  = user.cakes.map(c => <li key={c.id}>{c.name}</li> )
   
    return(
        <div>
            <ul>{theCakes}</ul>
        </div>
    )
}

export default CakeReviewed