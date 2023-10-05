import React from "react";
// import ReviewCards from "./ReviewCards";
// import { Link} from "react-router-dom"
import ReviewCard from "./ReviewCard";
// import Review from "./Review";



function CakeCards({cake}){
    
    const { name, cake_image, location, type_of_cake} = cake;

return(
    <div className="card">
        <h2 className="t"> {name} </h2>
        <p className="p">Location: {location} </p>
        <p className="p">Type of cake: {type_of_cake}</p>
        <img src={cake_image} alt="name" className="cakepic"/>
        <ReviewCard cake={cake} cake_reviews={cake.reviews}/>
    </div>

);
}


export default CakeCards