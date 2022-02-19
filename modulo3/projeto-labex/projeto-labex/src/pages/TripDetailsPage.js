import React from "react";
import { useNavigate } from "react-router-dom";

export const TripDetailsPage = () => {


    const navigate = useNavigate();

    const goToAdminHome = () => {
        navigate("/admin/trips/list")
    };


    return (
        <div>
            <p>TripDetailsPage</p>
            <button type="button" onClick={goToAdminHome}>Back</button>
        </div>
    )

}