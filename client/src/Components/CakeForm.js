import React, { useState } from "react";

function CakeForm({onAddCake}){
    
    const [name, setCakename] = useState("")
    const [type_of_cake, setType_of_cake] = useState("")
    const [cake_image, setCake_image] = useState("")
    const [location, setLocation] = useState("")

    const [errors, setErrors] = useState([])



    function handleSubmitNewCake(e){
        e.preventDefault()
            const itemData = {
            name: name,
            type_of_cake: type_of_cake,
            cake_image: cake_image,
            location: location,
            };
            fetch("/cakes", {
                 method: "POST",
                 headers: {
                    "Content-Type": "application/json",
                    },
                 body: JSON.stringify(itemData),
             })
            .then((r) => r.json())
            .then((data) => {
                if(!data.errors) {
                    onAddCake(data)
                    setCakename("")
                    setType_of_cake("")
                    setCake_image("")
                    setLocation("")
                 } else {
                    const errorLis = data.errors.map((e) => (
                     <div key={e}>
                        <ul style={{color: "red"}}>{e}</ul>
                     </div>
                    ))

                    setErrors(errorLis)
                }
            })
    }


    

    return(
        <div>
            <form onSubmit={handleSubmitNewCake}>
                <h1> Add a New Cake </h1>
                    <input type= "text" id= "name" value={name} onChange={(e) => setCakename(e.target.value)} placeholder="cake name"/>
                    <input type= "text" id="type_of_cake" value={type_of_cake} onChange={(e) => setType_of_cake(e.target.value)} placeholder="type of cake"/>
                    <input type= "text" id="cake_image" value={cake_image} onChange={(e) => setCake_image(e.target.value)} placeholder="URL for cake image"/>
                    <input type= "text" id="cake_location" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="location"/>
                <button type="submit"> add cake </button>
            </form>

            {errors}
        </div>
    )
}

export default CakeForm

