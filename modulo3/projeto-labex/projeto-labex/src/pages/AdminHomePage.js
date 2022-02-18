import React from "react";
import { useNavigate } from "react-router-dom";




export const AdminHomePage = () => {


    const navigate = useNavigate();

    const goToLoginPage = () => {
        navigate("/login")
    };

    return (
        <div>
            <p>AdminHomePage</p>
            <button onClick={goToLoginPage}>Back</button>
        </div>
    )

}