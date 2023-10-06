import React, { useState } from "react";

function ReviewForm({cake, onAddReview}){

    const [body, setBody] = useState("")
    const [errors, setErrors] = useState([])

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
                 const errorLis = cake.errors.map(e => <ul style={{color:"red"}} key={e}>{e}</ul>)
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

