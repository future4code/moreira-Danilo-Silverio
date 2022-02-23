import React from "react";
import "./HomePage.css"
import { useNavigate } from "react-router-dom";
import Background from "../../assets/background-home.jpg"
import Labex from "../../assets/labex.png"


export const HomePage = () => {

    const navigate = useNavigate();

    const goToLoginPage = () => {
        navigate("/login")
    };

    const goToListTripsPage = () => {
        navigate("/trips/list")
    };



    return (
        <div className="home-page">
            <div>
                <img className="home-page-background" src={Background} alt="Home Page Background" />
                <header className="header">
                    <img className="site-logo" src={Labex} alt="Site Logo" />
                    <div className="navigate-buttons">
                        <button className="login-button" onClick={goToLoginPage}>LOGIN</button>
                    </div>
                </header>
                <div className="home-content">
                    <h1 className="motto">The sky is no longer the limit</h1>
                    <p className="motto-description">Travel with us and make<br/>your life a multi-planetary <br/>experience</p>
                    <div>   
                        <button type="button" className="see-all-trips" onClick={goToListTripsPage}>See our trips</button>
                    </div>
                </div>
            </div>
        </div>
    )

}