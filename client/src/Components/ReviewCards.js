import React from "react";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import ReviewForm from "./ReviewForm";

function ReviewCards({review, user_comment}){




    return(

        <div>
            <ReviewForm/>
            <div className="comment-author">@{user_comment}</div>
            <div className="comment-text">{review}</div>
        </div>
    )
}

export default ReviewCards