import React from "react";
import { useEffect } from "react";
import { goToLoginPage } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";






export const PostsPage = () => {
    

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token){
            goToLoginPage(navigate)
        }
    })


    return(
        <div>
            Posts
        </div>
    )
}