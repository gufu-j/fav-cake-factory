import React from "react";
// import ReviewCards from "./ReviewCards";
// import { Link} from "react-router-dom"
import ReviewCards from "./ReviewCards";



function CakeCards({cake}){

    const { name, cake_image, location, type_of_cake} = cake;

    const review = cake.reviews.map((e) => e.review)
    const user_comment = cake.reviews.map((e) => e.username) 


    console.log(review)
    console.log(user_comment)

return(
    <div className="card">
        <h2 className="t"> {name} </h2>
        <p className="p">Location: {location} </p>
        <p className="p">Type of cake: {type_of_cake}</p>
        <img src={cake_image} alt="name" className="cakepic"/>
        <ReviewCards review={review}  user_comment={user_comment}/>
    </div>

);
}


export default CakeCards