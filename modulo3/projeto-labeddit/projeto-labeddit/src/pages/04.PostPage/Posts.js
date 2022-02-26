import React from "react";
import { useEffect } from "react";
import { goToLoginPage } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { PageContainer } from "./PostStyle";






export const PostsPage = () => {
    

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token){
            goToLoginPage(navigate)
        }
    }, [navigate])


    return(
        <PageContainer>
            <Header/>
                Posts
        </PageContainer>
    )
}