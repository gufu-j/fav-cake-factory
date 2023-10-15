import React, { useState } from "react";
import ReviewCard from "./ReviewCard";



function CakeCards({cake, onAddReview, onDeleteCake, onUpdateCakeReview, cakes}){
    
    const { name, cake_image, location, type_of_cake} = cake;

    const [show, setShow] = useState(false);

return(
    <div className="card">
        <h2 className="t"> {name} </h2>
        <p className="p">Location: {location} </p>
        <p className="p">Type of cake: {type_of_cake}</p>
        <img src={cake_image} alt="name" className="cakepic"/>
        <button onClick={() =>setShow(!show)}>
            { show ? "Hide Reviews": "Add or Show Reviews"}    
        </button>
        {show? <ReviewCard cake={cake} cake_reviews={cake.reviews} onAddReview={onAddReview} onDeleteCake={onDeleteCake} onUpdateCakeReview={onUpdateCakeReview} cakes={cakes}/> : null}
    </div>

 );
}


export default CakeCards