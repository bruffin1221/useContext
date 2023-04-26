import{useState, createContext} from 'react'
import {useContext} from 'react'
import './index.css'
import React from 'react'
import  ReactDOM  from 'react-dom/client'

function UseContext(){
    
    return(
       <>
         <NavLinks/>
       </>
    )
}

export const NavContext = createContext()

const NavLinks=()=>{

    const[loggedIn, setLogin]=useState({user:"Xavien", login: true, logout: false})
    const [loggedOut, setLogout] = useState({user: " ", login: false, logout: true})
       
    return(
        <NavContext.Provider value={{loggedIn, loggedOut}}>
            <div>
                <NavBar/>
            </div>
        </NavContext.Provider>   
    )
   
}

const NavBar=()=>{
     
    return(
        <div id="nav-link">
            <div id="div1">
                <h3>Context Api</h3>
            </div>
            <div id="div2">
                <p>Home</p>
                <p>About</p>
                <p>Services</p>
            </div>
            <UserContainer/>
        </div>
    )
}

const UserContainer=()=>{
    const{loggedIn, loggedOut} = useContext(NavContext)
    const[logIn, setLogin] = useState(loggedIn.login)
    const[logOut, setLogout] = useState(loggedOut.login)
   
    const toLogOut=()=>{
         setLogin(loggedOut.login)
         setLogout(loggedOut.logout)
    }
    
    const toLogIn=()=>{
        setLogin(loggedIn.login)
        setLogout(loggedIn.logout)
    }

    return(
       <div id="container">
            {logIn &&
             <div className="user-container">
                <p>Hello {loggedIn.user}</p>
                <button className="button" onClick={toLogOut}>Log-Out</button>
             </div>
            }
             
            {logOut &&
              <div className="user-container">
                <p>Please Login</p>
                <button className="button"  onClick={toLogIn}>Log-In</button>
              </div>}
            
        </div>
      
     

    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<UseContext/>)