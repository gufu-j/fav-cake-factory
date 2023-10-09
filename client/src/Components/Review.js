import React from "react";
import { UserContext } from "./context/user";
import { useContext } from "react";
import EditReview from "./EditReview";


function Review({review, onDeleteCake, cake, onUpdateCakeReview}){

    const {user} = useContext(UserContext)


    function handleDeleteClick(){
        fetch(`/reviews/${review.id}` , {
            method: "DELETE",
        })
        .then((r) => {
            if(r.ok){
                onDeleteCake(review)
            } 
        });
    }

    return(
        <div className="container">
            <ul className="comment-author"> 
                @{review.username}
            </ul>
            <ul>
                {review.review}
            </ul>
                {user.id === review.user_id?  
                    <button className="remove" onClick={handleDeleteClick}>
                     🗑️
                    </button> : null
                }
                 {user.id === review.user_id?  
                     <EditReview review={review} cake={cake} onUpdateCakeReview={onUpdateCakeReview}/> : null
                }

        </div>
    )
}

export default Review