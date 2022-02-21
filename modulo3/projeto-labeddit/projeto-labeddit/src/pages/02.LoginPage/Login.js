import React from "react";
import { useNavigate } from "react-router-dom";







export const LoginPage = () => {
    

    const navigate = useNavigate()
    
    const homeButton = () => {
        navigate("/")
    }


    return(
        <div>
            <h1>Login Page</h1>
            <button type="button" onClick={homeButton}>Home</button>
        </div>
    )
}