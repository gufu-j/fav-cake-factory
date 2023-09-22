import React from "react";
import { Link } from "react-router-dom"

function NavBar({ user, setUser }){


    // styling links
    const linkStyles = {
        display: "inline-block",
        width: "25px",
        height: "25px",
        padding: "25px",
        margin: "0 6px 6px",
        textDecoration: "none",
      };




    function handleLogout(){
        fetch("/logout", {
            method: "DELETE",
        }).then((r)=> {
            if(r.ok){
                setUser(null);
            }
        });
    }


    return(
        <header>
            <div>
                <Link to="/" style = {linkStyles} className="home"> Home </Link>
                <Link to="/MyCakes" style = {linkStyles} className="myCakes" > My Cakes </Link>
            </div>
            <div>
                {user ? (
                    <button onClick={handleLogout} className="logOutbtn"> Logout </button>
                 ) : (
                    <>
                        <Link to= "/signup"> Sign up </Link>
                        <Link to= "/login"> Login</Link>
                    </>
                )}
            </div>
        </header>
    );
}

export default NavBar