import React from "react";


function CakeCards({cake}){

    const {id, name, cake_image} = cake;
return(
    <div>
        <h2>{name}</h2>
        <img src={cake_image} alt="name"/>
    </div>

);
}


export default CakeCards