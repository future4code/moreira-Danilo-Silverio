import React from "react";
import { useNavigate } from "react-router-dom";







export const SignUpPage = () => {
    

    const navigate = useNavigate()
    
    const homeButton = () => {
        navigate("/")
    }



    return(
        <div>
            <h1>Sign Up</h1>
            <button type="button" onClick={homeButton}>Home</button>
        </div>
    )
}