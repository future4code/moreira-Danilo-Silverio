import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import { baseUrl } from "../../constants/Url";
import { Header } from "../../components/Header";
import { CreatePost, Feed, FeedContent, FeedPageContainer, FirstColumn, Labebott, MainColumn, PostContainer, PostInfo, ThirdColumn, UserNick, PostDate, PostTitle, PostContent, PostHeader, PostBody, PostFooter } from "./FeedStyle";
import LabeBot from "../../assets/labedbot.png"
import UserPostBot from "../../assets/userPostBot.png"
import { createPost, goToPostDetails } from "../../routes/Coordinator";



export const FeedPage = () => {
    
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token){
            navigate("/labeddit/login")
        }
    }, [navigate])

    const getPosts = useRequestData([], `${baseUrl}/posts`)
    console.log(getPosts)

    const onClickPostCard = (id) => {
        goToPostDetails(navigate, id)
    }

    const onClickCreatePost = () => {
        createPost(navigate)
    }

    const feedPosts = getPosts.map((post) => {
        return (
            <PostContainer key={post.id} onClick={() => onClickPostCard(post.id)}>
                <PostHeader>
                    <img src={UserPostBot} alt="User post bot" />
                    <UserNick><strong>r/{post.username}</strong></UserNick>
                    <PostInfo>- Sent by u/{post.username}</PostInfo>
                    <PostDate>Date: {post.createdAt}</PostDate>
                </PostHeader>
                <PostContent>
                    <PostTitle>{post.title}</PostTitle>
                    <PostBody>{post.body}</PostBody>
                </PostContent>
                <PostFooter>
                    <button type="button">Vote</button>
                    <button type="button" onClick={() => onClickPostCard(post.id)}> 💬 Comments</button>
                </PostFooter>
            </PostContainer>
        )
    })

    return(
        <FeedPageContainer>
            <Header/>
            <FeedContent>
                <FirstColumn>
                    
                </FirstColumn>
                <MainColumn>
                    <CreatePost>
                        <Labebott src={LabeBot} alt="" />
                        <input 
                            type="text"
                            placeholder="Post"
                            onClick={onClickCreatePost}
                        />
                        <button onClick={onClickCreatePost}>Post</button>
                    </CreatePost>
                    <Feed>
                        {feedPosts}
                    </Feed>
                </MainColumn>
                <ThirdColumn>
                    
                </ThirdColumn>
            </FeedContent>
        </FeedPageContainer>
    )
}