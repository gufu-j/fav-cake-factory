import React from "react";
import CakeCards from "./CakeCards";

function Cakes({cakes, onAddReview, onDeleteCake, onUpdateCakeReview}){


        let cakeList = cakes.map((cake) => (
            <CakeCards
                key={cake.id}
                cake={cake}
                onAddReview={onAddReview}
                onDeleteCake={onDeleteCake}
                onUpdateCakeReview={onUpdateCakeReview}
            />
        ))

        //show cakes each in different cards.
    return(
        <div>
            {cakeList}
        </div>
    )
}


export default Cakes