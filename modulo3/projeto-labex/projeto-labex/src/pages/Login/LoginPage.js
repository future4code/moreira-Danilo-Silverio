import React from "react";
import "./Login.css"
import { useNavigate } from "react-router-dom";
import Labex from "../../assets/labex.png"

export const LoginPage = () => {

    const navigate = useNavigate();

    const goToHomePage = () => {
        navigate("/")
    };

    return (
        <div className="login-page">
            <header className="header-login-page">
                <img className="site-logo" src={Labex} alt="Site Logo" />
                <button className="go-to-home-page" type="button" onClick={goToHomePage}>Back</button>
            </header>
            <div>
                outra
            </div>
        </div>
    )

}