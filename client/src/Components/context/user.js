import React, {useState, useEffect} from "react";

const UserContext = React.createContext();


//Create context 
function UserProvider( {children}){

    // create a provider component
    const [user, setUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false) //add loggedIn flag

    //cakes 
   // const [cakes, setCakes] = useState([])

    useEffect(() => {
      fetch('/me')
      .then(res => res.json())
      .then(data => {
        setUser(data)
        if (data.error) {
            setLoggedIn(false)

        } else {
            setLoggedIn(true)
           // fetchCakes()
        }
      //  data.error? setLoggedIn(true) : setLoggedIn(false)  // set loggedIn flag
      })
    }, [])
  
    // console.log(user)
    // console.log(children)


    // const fetchCakes = () => {
    //     fetch('/cakes')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //        // setCakes(data)
    //     })
    // }

    // const addCake = (cake) => {
    //     fetch('/cakes',{
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify(cake)
    //     })
    //     .then(res => res.json()
    //     .then(newcake => {
    //         setCakes([...cake, newcake])
    //     }))
    // }

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
        <UserContext.Provider value={{user, login, logout, signup, loggedIn}}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider}