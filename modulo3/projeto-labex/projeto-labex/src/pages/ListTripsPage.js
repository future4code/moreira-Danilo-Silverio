import React from "react";
import { useNavigate } from "react-router-dom";





export const ListTripsPage = () => {



    const navigate = useNavigate();

    const goToHomePage = () => {
        navigate("/")
    };




    return (
        <div>
            <p>ListTripsPage</p>
            <button onClick={goToHomePage}>Back</button>
        </div>
    )

}