import React from "react";
import { UserContext } from "./context/user";
import { useContext } from "react";


function Review({review}){

    const {user} = useContext(UserContext)


    function handleDeleteClick(){
        fetch(`/reviews/${review.id}` , {
            method: "DELETE",
        })
        .then((r) => {
            if(r.ok){
                console.log(r)
            } else {
                r.json().then(console.log)
            }
        })
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
        </div>
    )
}

export default Review