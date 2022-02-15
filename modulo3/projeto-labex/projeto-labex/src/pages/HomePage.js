import React from "react";
import { useNavigate } from "react-router-dom";


export const HomePage = () => {

    const navigate = useNavigate();

    const goToLoginPage = () => {

        navigate("/login")

    };


    return (
        <div>
            <p>HomePage</p>
            <button onClick={goToLoginPage}>Area Admin</button>
        </div>
    )

}