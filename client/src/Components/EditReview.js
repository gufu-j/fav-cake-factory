import React from "react";
import { useState } from "react";

function EditReview({review, cake}){

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };



    const [body, setBody] = useState(review.review);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/reviews/${review.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
            review: body,
      }),
    })
      .then((r) => r.json())
      .then((updatedBakery) => console.log(updatedBakery));
  }
  
    return(
        <>
         <button onClick={toggleModal} className="button"> ✍ </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h1>Edit Review</h1>
            <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="name"
                value={body}
                onChange={(e)=> setBody(e.target.value)} 
                placeholder="review"     
                />
                <button type="submit"> Update Review </button>
            </form>
            </div>
            <button className="close-modal" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
        )}
        </>
    )
}

export default EditReview