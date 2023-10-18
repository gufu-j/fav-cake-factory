import React from "react";
import ReviewForm from "./ReviewForm";
import Review from "./Review";



function ReviewCard({cake, cake_reviews, onAddReview, onDeleteCake, onUpdateCakeReview}){


    let review_list= cake_reviews.map((review) => (
        <Review
            key={review.id}
            reviewObj={review}
            onDeleteCake={onDeleteCake}
            cake={cake}
            onUpdateCakeReview={onUpdateCakeReview}
        />
    ))
        //show review list
    return(

        <div>
            <ReviewForm cake={cake} onAddReview={onAddReview} />
            {review_list}
        </div>
    )
}

export default ReviewCard