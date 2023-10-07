import React from "react";
import CakeCards from "./CakeCards";

function Cakes({cakes, onAddReview, onDeleteCake}){

        let cakeList = cakes.map((cake) => (
            <CakeCards
            key={cake.id}
            cake={cake}
            onAddReview={onAddReview}
            onDeleteCake={onDeleteCake}
            />
        ))

    return(
        <div>
            {cakeList}
        </div>
    )
}


export default Cakes