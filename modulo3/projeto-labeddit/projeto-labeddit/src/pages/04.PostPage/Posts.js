import React from "react";
import { useEffect } from "react";
import { goToLoginPage } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { PostPageContainer } from "./PostStyle";







export const PostsPage = () => {
    

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token){
            goToLoginPage(navigate)
        }
    }, [navigate])

    return(
        <PostPageContainer>
            <Header/>
                Posts
        </PostPageContainer>
    )
}