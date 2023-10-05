import React from "react";
import ReviewForm from "./ReviewForm";
import Review from "./Review";



function ReviewCard({cake, cake_reviews}){


    let review_list= cake_reviews.map((review) => (
        <Review
        key={review.id}
        review={review}
        />
    ))

    return(

        <div>
            <ReviewForm cake={cake}/>
            {review_list}
        </div>
    )
}

export default ReviewCard