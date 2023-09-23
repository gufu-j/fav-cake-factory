import React from "react";


function CakeCards({cake}){

    let cake_user = cake.users[0].username

    const {id, name, cake_image, location, type_of_cake} = cake;
return(
    <div className="card">

        <h2 className="t"> {name} </h2>
        <p className="t">Posted by {cake_user}</p>
        <img src={cake_image} alt="name" className="cakepic"/>
        <p className="p">Location: {location}</p>
        <p className="p">Type of cake: {type_of_cake}</p>

    </div>

);
}


export default CakeCards