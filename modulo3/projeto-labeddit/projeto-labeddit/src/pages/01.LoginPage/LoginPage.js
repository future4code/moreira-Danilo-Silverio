import React from "react";
import { useNavigate } from "react-router-dom";
import { HomePageContainer, HomeContent, Logo, Motto, Fieldset, ForgotPassword, SignupButton, JoinUs } from "./styled";
import Labeddit from "../../assets/logo.png"
import { LoginForm } from "./LoginForm";
import { useEffect } from "react";
import { goToFeedPage } from "../../routes/Coordinator";






export const LoginPage = () => {
    
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token){
            goToFeedPage(navigate)
        }
    })
    
    const signupButton = () => {
        navigate("/labeddit/signup")
    };
    
return(
    <HomePageContainer>
        <HomeContent>
            <Logo src={Labeddit} alt="Logo" />
            <Motto>Labeddit helps you connect and share with anything and anyone around the world.</Motto>
        </HomeContent>
        <div>
            <Fieldset>
                <LoginForm/>
                <ForgotPassword>Forgot password?</ForgotPassword>
                <SignupButton onClick={signupButton}>Create new account</SignupButton>
            </Fieldset>
            <JoinUs><strong>Create your account</strong> and join our community.</JoinUs>
        </div>
    </HomePageContainer>
)
}