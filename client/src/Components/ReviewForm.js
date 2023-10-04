import React, { useState } from "react";
import { UserContext } from "./context/user";
import { useContext } from "react";



function ReviewForm(){

    const [rev, setRev] = useState([])

    // const{review} = useContext(UserContext)
    const [errors, setErrors] = useState([])

    // const navigate = useNavigate()

    // console.log(errors)
    

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/reviews", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                rev: rev,
            }),
        })
        .then(res => res.json())
        .then(cake => {
             if (!cake.errors) {
                 setRev(cake)
             } else {
                 const errorLis = cake.errors.map(e => <li key={e}>{e}</li>)
                 setErrors(errorLis)
             }
        })
        
    }



    return(
     <div>
         {/* <button onClick={handleGoBackClick}> home </button> */}
            <form onSubmit={handleSubmit}>
                <h1> Add a Review </h1>
                <input type= "text" id= "review" value={rev} onChange={(e) => setRev(e.target.value)} placeholder="review"/>
                <button type="submit"> add review </button>
            </form>
            {errors}
        </div>


    )  
}

export default ReviewForm

