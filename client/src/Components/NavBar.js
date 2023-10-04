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
                <button onClick={handleLogout}> Logout </button>
                <Link className="addingCakeForm"  to="/addCake"  >
                <button>Add a Cake</button>
                {/* <CakeForm/> */}
                </Link>
            </div>
        )
    }else{
        return (
            <div>
                <Link to='/login'>
                    <button>Login</button>
                </Link>
                <Link to='/signup'>
                    <button>Signup</button>
                </Link>
                <hr/>
            </div>
        )
    } 
}

export default NavBar
