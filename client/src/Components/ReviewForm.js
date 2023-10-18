import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./context/user";
import { useContext } from "react";

function ReviewForm({cake, onAddReview}){

    const [body, setBody] = useState("")
    const [errors, setErrors] = useState([])


    console.log(body)

    //// aditional features not needed. ////
    // what's in this box handles the error if the user tries to make a review
    // and has not signed in yet. It will ask him to log in or create an account.
    const navigate = useNavigate()
    const handleGoToSignIn = () => {
        navigate('/signup');
      };
    const handleGoToLogin= () => {
        navigate('/login');
    };
    ///////////////////////////////////////

    
    // we added the setUser state right at the end of this project, it goes along with the code marked below in green, identified as #combonumber7fromMacDonals
    const {user, setUser} = useContext(UserContext)
    
    function handleSubmit(e) {
        e.preventDefault();
        fetch("/reviews", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                review: body,   //<--- body is an the current review you are typing from the input
                cake_id: cake.id   //< --- we want to send the cake_id to the backend too.
            }),                    // remember, to create a review in the backend you need cake_id, review, and user_id. user_id is already stored in sessions so no need to include it.
        })
        .then(res => res.json())
        .then(data=> {
             if (!data.errors) {
                 setBody("")
                 onAddReview(data)
                 console.log(data)

                 // this was added right at the end of this project, #combonumber7fromMacDonals
                    console.log(cake)
                        setUser({
                        ...user, cakes: [...user.cakes, cake]
                        })
                //////////////////////////////////////
             } else {
                const errorLis = data.errors.map((e) => (
                    <div key={e}>
                        <ul style={{color:"red"}} >{e}😣</ul>
                    {user.id ? "" :  
                        <div>
                            <button  className="button" onClick={handleGoToSignIn}> Click here to SignIn and make a comment </button> 
                            <button  className="button" onClick={handleGoToLogin}> Already have an account? Click here</button> 
                        </div>
                    }
                    </div>
                 ))
                 setErrors(errorLis)
             }
        })
    }

    return(
     <div>
            <form onSubmit={handleSubmit}>
                <input type= "text" id= "review" value={body} onChange={(e) => setBody(e.target.value)} placeholder="review"/>
                <button type="submit" className="button"> Add Review🤔</button>
            </form>
            {errors}
        </div>
    )  
}

export default ReviewForm

