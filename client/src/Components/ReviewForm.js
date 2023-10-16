import React, { useState } from "react";

// if user is log logged in --1
import { useNavigate } from "react-router-dom";
// if user is logged in --2
import { UserContext } from "./context/user";
import { useContext } from "react";

function ReviewForm({cake, onAddReview, cakes}){

    const [body, setBody] = useState("")
    const [errors, setErrors] = useState([])

    // --1
    const navigate = useNavigate()
    const handleGoToSignIn = () => {
        navigate('/signup');
      };
    const handleGoToLogin= () => {
        navigate('/login');
    };
    // --2

    
    // we added the setUser state right at the end of this project, it goes along with the code marked below in green
    const {user, setUser} = useContext(UserContext)
    

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/reviews", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                review: body,
                cake_id: cake.id
            }),
        })
        .then(res => res.json())
        .then(data=> {
             if (!data.errors) {
                 setBody("")
                 onAddReview(data)
                 //console.log(data)

                 // this was added right at the end of this project
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

    //console.log(user)


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

