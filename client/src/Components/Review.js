import React from "react";
import { UserContext } from "./context/user";
import { useContext } from "react";
import EditReview from "./EditReview";


function Review({reviewObj, onDeleteCake, cake, onUpdateCakeReview}){

    //at the very end of this project, when I had to update user from changes to the cakes as a result of adding
    //or deleting a review, I added the setUser to line 11. 
    const {user, setUser} = useContext(UserContext)


    function handleDeleteClick(){
        fetch(`/reviews/${reviewObj.id}` , {
            method: "DELETE",
        })
        .then((r) => {
                if(r.ok){
                 onDeleteCake(reviewObj)

                    //done at the end of project
                    // c stands for cake in this fuction
                    const updatedCake= user.cakes.filter((c)=> c.id !== reviewObj.cake_id)
                     setUser({...user, cakes: updatedCake})
                    ///////////////////
                } 
            }
        )

    }

    return(
        <div className="container">
            <ul className="comment-author"> 
                @{reviewObj.username}
            </ul>
            <ul>
                {reviewObj.review}
            </ul>
                {user.id === reviewObj.user_id?  
                    <button className="remove" onClick={handleDeleteClick}>
                        🗑️
                    </button> : null
                 }
                {user.id === reviewObj.user_id?  
                     <EditReview review={reviewObj} cake={cake} onUpdateCakeReview={onUpdateCakeReview}/> : null
                 }
        </div>
    )
}

export default Review