import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { goToLoginPage } from "../../routes/Coordinator";
import useRequestData from "../../hooks/useRequestData";
import { baseUrl } from "../../constants/Url";
import { Header } from "../../components/Header";









export const FeedPage = () => {
    
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token){
            navigate("/labeddit/login")
        }
    })

    const navigate = useNavigate()

    const getPosts = useRequestData([], `${baseUrl}/posts`)
    console.log(getPosts)

    const feedPosts = getPosts.map((post) => {
        return (
            <div key={post.id}>
                <p>{post.username}</p>
                <p>{post.title}</p>
                <p>{post.createdAt}</p>
            </div>
        )
    })

    return(
        <div>
            <Header/>
            <h1>Feed</h1>
            <button>Logout</button>
            {feedPosts}
        </div>
    )
}