import React, {useState, useEffect} from "react";

const UserContext = React.createContext();


//Create context 
function UserProvider( {children}){

    // create a provider component
    const [user, setUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false) //add loggedIn flag
    const [reviews, setReviews] = useState({})

    
    useEffect(() => {
      fetch('/me')
      .then(res => res.json())
      .then(data => {
        if (data.errors) {
            setLoggedIn(false)

        } else {
            setLoggedIn(true)
            setUser(data)
        }
      })
    }, [])

    


    const fetchReviews = () => {
        fetch("/reviews")
        .then(res => res.json())
        .then(()=> {
            setReviews()
        })
    }

  
    const login = (user) => {
        setUser(user)
        setLoggedIn(true) //set loggedIn flag
    }

    
    const logout = () => {
        setUser({})
        setLoggedIn(false) //set loggedIn flag

    }

    const signup = (user) => {
        setUser(user)
        setLoggedIn(true) // set loggedIn flag

    }

    return(
        // add loggedIn to global state
        <UserContext.Provider value={{user, login, logout, signup, loggedIn, reviews}}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider}