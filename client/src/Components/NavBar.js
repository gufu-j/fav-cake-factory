import React, { useContext} from "react";
import  { UserContext } from "./context/user"
import { Link, useNavigate } from "react-router-dom"
// import CakeForm from "./CakeForm";

function NavBar({}){

    const {user, logout, loggedIn} = useContext(UserContext)

    const navigate = useNavigate()

    function handleLogout(){
        fetch('/logout', {
            method: 'DELETE',
            headers: {'Content-Type' : 'application/json'}
        })
        .then(()=> {
            logout()
            navigate('/')
        })
    }


    if(loggedIn){
        return(
            <div>
                <h1>Hello {user.username}</h1>
                
                <Link to='/'>
                    <button className="button-54" role="button">Home</button>
                </Link> 

                <Link className="addingCakeForm"  to="/addCake"  >
                <button className="button-54" role="button" >Add a Cake</button>
                </Link>
               
                <Link to="/aboutUs">
                    <button className="button-54" role="button">About Us</button>
                </Link>
                
                <Link to="/cakesreviewed">
                    <button className="button-54" role="button">History</button>
                </Link>
                <button className="button-54" role="button" onClick={handleLogout}> Logout </button>

            </div>
        )
    }else{
        return (
            <div>
                <Link to='/login'>
                    <button className="button-54" role="button" >Login</button>
                </Link>
                <Link to='/signup'>
                    <button className="button-54" role="button" >Signup</button>
                </Link>
                <Link to='/'>
                    <button className="button-54" role="button" >home</button>
                </Link>
                <hr/>
            </div>
        )
    } 
}

export default NavBar
