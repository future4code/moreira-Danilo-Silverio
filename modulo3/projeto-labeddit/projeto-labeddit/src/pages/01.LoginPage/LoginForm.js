import React from "react";
import { useNavigate } from "react-router-dom";
import {  TextField, LoginButton } from "./styled";
import useForm from "../../hooks/useForm";
import { onSubmitLogin } from "../../services/users";







export const LoginForm = () => {
    
    const [form, onChange, clear] = useForm({ email: "", password: ""})
    

    const onSubmitForm = (event) => {
        event.preventDefault()
        onSubmitLogin(form, clear, navigate)
    }

    

    const navigate = useNavigate();
    
    
return(
    
    <form onSubmit={onSubmitForm}>
        <TextField
            placeholder="E-mail"
            name={"email"}
            value={form.email}
            onChange={onChange}
            required
            type="email"
                        
        />
        <TextField
            placeholder="Password"
            name={"password"}
            value={form.password}
            onChange={onChange}
            required
            type="password"
        />            
        <LoginButton type={"submit"} onClick={onSubmitLogin}>Log in</LoginButton>
    </form>               
                
)
}   