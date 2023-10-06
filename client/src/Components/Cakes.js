import React from "react";
import CakeCards from "./CakeCards";

function Cakes({cakes, onAddReview}){

        let cakeList = cakes.map((cake) => (
            <CakeCards
            key={cake.id}
            cake={cake}
            onAddReview={onAddReview}
            />
        ))

    return(
        <div>
            {cakeList}
        </div>
    )
}


export default Cakes