import React, { useState } from "react";


import { useNavigate } from "react-router-dom";

function ReviewForm({cake, onAddReview}){

    const [body, setBody] = useState("")
    const [errors, setErrors] = useState([])

    const navigate = useNavigate()
    const handleGoToLogin = () => {
        navigate('/signup');
      };


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
             } else {
                 const errorLis = data.errors.map((e) => (
                <div key={e}>
                 <ul style={{color:"red"}} >{e}</ul>
                 <button onClick={handleGoToLogin}> SingUp </button>
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

