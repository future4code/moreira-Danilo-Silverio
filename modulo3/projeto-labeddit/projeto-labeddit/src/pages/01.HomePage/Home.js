import React from "react";
import { useNavigate } from "react-router-dom";







export const HomePage = () => {
    

    const navigate = useNavigate()
    
        const loginButton = () => {
            navigate("/labeddit/login")
        }
        const signupButton = () => {
            navigate("/labeddit/signup")
        }
        
    return(
        <div>
            <h1>HOME PAGE</h1>
            <button type="button" onClick={loginButton}>Login</button>
            <button type="button" onClick={signupButton}>Sign Up</button>
        </div>
    )
}