import React from "react";
import { useNavigate } from "react-router-dom";
import { SignUpContainer, Fieldset,TextField, FieldsetDescription, FieldsetTittle, Terms, SignupButton, LabeBot, Labe, BackButton } from "./SignUpStyled";
import LabedditBot from "../../assets/labeddit.png"
import Labeddit from "../../assets/logo.png"






export const SignUpPage = () => {
    

    const navigate = useNavigate()
    
    const feedButton = () => {
        navigate("/labeddit/feed")
    }

    const homeButton = () => {
        navigate("/")
    }



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
                    />
                    <TextField
                        type="email"
                        placeholder="E-mail"
                    />
                    <TextField
                        type="password"
                        placeholder="Password"
                    />
                </form>
                <Terms>By clicking Sign Up, you agree to our <span>Terms</span>, <span>Data Policy</span> and <span>Cookies Policy</span>.</Terms>
                <SignupButton type="button" onClick={feedButton}>Sign Up</SignupButton>
            </Fieldset>
            
        </SignUpContainer>
    )
}