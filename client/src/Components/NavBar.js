import React, { useContext} from "react";
import  { UserContext } from "./context/user"
import { Link, useNavigate } from "react-router-dom"
// import {NavLink} from 'react-router-dom'

function NavBar({}){

    const {user, logout, loggedIn} = useContext(UserContext)

    const navigate = useNavigate()

    // styling links
    // const linkStyles = {
    //     display: "inline-block",
    //     width: "25px",
    //     height: "25px",
    //     padding: "25px",
    //     margin: "0 6px 6px",
    //     textDecoration: "none",
    //   };

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

    console.log(loggedIn)

    if(loggedIn){
        return(
            <div>
                <h1>Hello {user.username}</h1>
                <button onClick={handleLogout}> Logout </button>
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



        // <header>
        //     <div>
        //         <Link to="/" style = {linkStyles} className="link"> Home </Link>
        //         {user ? ( <Link to="/MyCakes" style = {linkStyles} className="link"> My Cakes </Link> ) : (null)}
        //     </div>
        //     <div>
        //         {user ? (
        //             <button onClick={handleLogout} className="lOut"> Logout </button>
        //          ) : (
        //             <>
        //                 <Link to= "/signup" className="link"> Sign up </Link>
        //                 <Link to= "/login" className="link"> Login</Link>
        //             </>
        //         )}
        //     </div>
        // </header>