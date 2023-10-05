import React from "react";


function Review({review}){

    return(
        <div className="container">
            <ul className="comment-author"> 
                @{review.username}
            </ul>
            <ul>
                {review.review}
            </ul>
        </div>
    )
}

export default Review