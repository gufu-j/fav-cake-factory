import React from "react";
import CakeCards from "./CakeCards";

function Cakes({cakes}){

        let cakeList = cakes.map((cake) => (
            <CakeCards
            key={cake.id}
            cake={cake}
            />
        ))

    return(
        <div>
            {cakeList}
        </div>
    )
}


export default Cakes