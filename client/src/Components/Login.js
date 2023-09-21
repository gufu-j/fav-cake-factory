import React from "react";
import { useState } from "react";


function Login({setUser}){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((r) => {
            console.log(r)
            if(r.ok){
                r.json().then((user) => setUser(user))
            } else {
                 r.json().then((errorData) => setErrors(errorData.errors));
            }
        });
    }

    console.log(errors)
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <h1> Login </h1>
            <input type= "text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username"/>
            <input type= "password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password"/>
            <button type="submit"> Login </button>
                <ul>
                    {errors.map((error) => (
                        <li key={error}>{error}</li>
                    ))}
                </ul> 
        </form>
        </div>
    );
}


export default Login