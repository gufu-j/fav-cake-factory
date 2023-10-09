import React, { useState } from "react";

function CakeForm({onAddCake}){
    
    const [name, setCakename] = useState([])
    const [type_of_cake, setType_of_cake] = useState([])
    const [cake_image, setCake_image] = useState([])

    function handleSubmitNewCake(e){
        e.preventDefault()
        const itemData = {
            name: name,
            type_of_cake: type_of_cake,
            cake_image: cake_image,
        };
        fetch("/cakes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(itemData),
        })
        .then((r) => r.json )
        .then((newCake) => onAddCake(newCake))
    }

    return(
        <div>
            <form onSubmit={handleSubmitNewCake}>
            <h1> Add a New Cake </h1>
            <input type= "text" id= "name" value={name} onChange={(e) => setCakename(e.target.value)} placeholder="cake name"/>
            <input type= "text" id="type_of_cake" value={type_of_cake} onChange={(e) => setType_of_cake(e.target.value)} placeholder="type of cake"/>
            <input type= "text" id="cake_image" value={cake_image} onChange={(e) => setCake_image(e.target.value)} placeholder="URL for cake image"/>
            <button type="submit"> add cake </button>
        </form>


        </div>
    )
}

export default CakeForm