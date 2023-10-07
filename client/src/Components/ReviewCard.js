import React from "react";
import ReviewForm from "./ReviewForm";
import Review from "./Review";



function ReviewCard({cake, cake_reviews, onAddReview, onDeleteCake}){


    let review_list= cake_reviews.map((review) => (
        <Review
        key={review.id}
        review={review}
        onDeleteCake={onDeleteCake}
        cake={cake}
        />
    ))




    return(

        <div>
            <ReviewForm cake={cake} onAddReview={onAddReview}/>
            {review_list}
        </div>
    )
}

export default ReviewCard