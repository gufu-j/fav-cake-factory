import React from "react";
import CakeCards from "./CakeCards";
// import ReviewCards from "./ReviewCards";
// import { useState } from "react";
// import { useContext } from "react";
// import { UserContext } from "./context/user";
// import { useParams } from "react-router-dom";

function Cakes({cakes}){

        let cakeList = cakes.map((cake) => (
            <CakeCards
            key={cake.id}
            cake={cake}
            />
        ))

        console.log(cakeList)

    return(
        <div>
            {cakeList}
        </div>
    )
}


export default Cakes