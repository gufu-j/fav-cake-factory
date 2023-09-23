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
                <Link to="/" style = {linkStyles} className="link"> Home </Link>
                {user ? ( <Link to="/MyCakes" style = {linkStyles} className="link"> My Cakes </Link> ) : (null)}
            </div>
            <div>
                {user ? (
                    <button onClick={handleLogout} className="lOut"> Logout </button>
                 ) : (
                    <>
                        <Link to= "/signup" className="link"> Sign up </Link>
                        <Link to= "/login" className="link"> Login</Link>
                    </>
                )}
            </div>
        </header>
    );
}

export default NavBar