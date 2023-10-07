import React from "react";
import { UserContext } from "./context/user";
import { useContext } from "react";
import EditReview from "./EditReview";


function Review({review, onDeleteCake, cake}){

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


            //     {if(r.ok){
            //         onDeleteCake(r)
            //     } else {
            //         console.log(r)
            //     }
            // })

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
                     <EditReview review={review} cake={cake} /> : null
                }

        </div>
    )
}

export default Review