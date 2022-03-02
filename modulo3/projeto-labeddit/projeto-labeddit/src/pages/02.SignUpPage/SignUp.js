import React from "react";
import { useNavigate } from "react-router-dom";
import { SignUpContainer, Fieldset,TextField, FieldsetDescription, FieldsetTittle, Terms, SignupButton, LabeBot, Labe, BackButton } from "./SignUpStyled";
import LabedditBot from "../../assets/labeddit.png"
import Labeddit from "../../assets/logo.png"
import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../constants/Url";
import { useEffect } from "react";
import { goToFeedPage } from "../../routes/Coordinator";






export const SignUpPage = () => {

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token){
            goToFeedPage(navigate)
        }
    })
    
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const onChangeUsername = (event) => {
        setUsername(event.target.value)
    };

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    };

    const onSubmitSignup = () => {
        
        const body = {
            username: username,
            email: email,
            password: password
        }

        axios.post(`${baseUrl}/users/signup`, body)
            .then((response) => {
                localStorage.setItem("username", username)
                localStorage.setItem("token", response.data.token)
                alert(`Welcome ${username}! Your account has been successfully created`)
                setUsername("")
                setEmail("")
                setPassword("")
                navigate("/")
            })
            .catch((error) => {
                alert(error.response.data)
            })
    };

    const navigate = useNavigate()
    
    const homeButton = () => {
        navigate("/")
    };



    return(
        <SignUpContainer>
            <LabeBot src={LabedditBot} alt="Labeddit Bot" />
            <Labe src={Labeddit} alt="Labeddit Bot" />
            <BackButton onClick={homeButton}>Back</BackButton>
            <Fieldset>
                <FieldsetTittle>Sign Up</FieldsetTittle>
                <FieldsetDescription>It's quick and easy.</FieldsetDescription>
                <form>
                    <TextField
                        type="text"
                        placeholder="Username"
                        required
                        value={username}
                        onChange={onChangeUsername}
                        title="Your username must have between 6 and 10 characters."
                    />
                    <TextField
                        type="email"
                        placeholder="E-mail"
                        required
                        value={email}
                        onChange={onChangeEmail}
                    />
                    <TextField
                        type="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={onChangePassword}
                    />
                </form>
                <Terms>By clicking Sign Up, you agree to our <span>Terms</span>, <span>Data Policy</span> and <span>Cookies Policy</span>.</Terms>
                <SignupButton type="button" onClick={onSubmitSignup}>Sign Up</SignupButton>
            </Fieldset>
            
        </SignUpContainer>
    )
}