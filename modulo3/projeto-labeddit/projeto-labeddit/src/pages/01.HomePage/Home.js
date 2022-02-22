import React from "react";
import { useNavigate } from "react-router-dom";
import { HomePageContainer, HomeContent, Logo, Motto, Fieldset, TextField, LoginButton, ForgotPassword, SignupButton, JoinUs } from "./styled";
import Labeddit from "../../assets/logo.png"







export const HomePage = () => {
    

    const navigate = useNavigate()
    
    const feedButton = () => {
        navigate("/labeddit/feed")
    }
    const signupButton = () => {
        navigate("/labeddit/signup")
    }
    
return(
    <HomePageContainer>
        <HomeContent>
            <Logo src={Labeddit} alt="Logo" />
            <Motto>Labeddit helps you connect and share with anything and anyone around the world.</Motto>
            
        </HomeContent>
        <div>
            <Fieldset>
                <form>
                    <TextField
                        placeholder="E-mail"
                    />
                    <TextField
                        placeholder="Password"
                    />
                </form>
                <LoginButton onClick={feedButton}>Log in</LoginButton>
                <ForgotPassword>Forgot password?</ForgotPassword>
                <SignupButton onClick={signupButton}>Create new account</SignupButton>
            </Fieldset>
            <JoinUs><strong>Create your account</strong> and join our community.</JoinUs>
        </div>
    </HomePageContainer>
)
}