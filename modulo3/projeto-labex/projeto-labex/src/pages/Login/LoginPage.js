import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./Login.css"
import Labex from "../../assets/labex.png"






export const LoginPage = () => {


    const navigate = useNavigate();

    const goToHomePage = () => {
        navigate("/")
    };


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    };

    const submitLogin = () => {

        const urlLogin = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/:danilo-silverio-moreira/login"

        const headers = {"Content-Type":"application/json"}

        const body = {
            "email": email,
            "password": password
        }

        axios.post(urlLogin,body,{headers})
        .then((res) =>{
            localStorage.setItem("token",res.data.token)
            navigate("/admin/trips/list")
        })
        .catch((error) =>{
            console.log(error.response)
        })
    }



    return (
        <div className="login-page-container">
            <header className="login-page-header">
                <img className="logo" onClick={goToHomePage} src={Labex} alt="Site logo" />
                <button className="button-go-back-to-home" onClick={goToHomePage}>Home</button>
            </header>
            <div>
                <fieldset className="fieldset-login">
                        <div className="fieldset-header">
                            <h1>Log in</h1>
                            <p className="our-motto">The sky is no longer the limit. Join us on this unique experience</p>
                        </div>
                        <div className="user-info">
                            <label forHtml="email">E-mail</label>
                            <input 
                                type="email" 
                                id="email"
                                required
                                placeholder="Type your e-mail"
                                value={email}
                                onChange={onChangeEmail}
                            />
                            <label>Password</label>
                            <input 
                                type="password" 
                                placeholder="Type your password"
                                value={password}
                                onChange={onChangePassword}
                            />
                            <button onClick={submitLogin}>Continue</button>
                        </div>
                </fieldset>
            </div>
        </div>
    )

}

