import React from "react";
import { Header } from "../../components/Header";
import { CreatePostPageContent, CreateTitle, PageContent, PostInputBody, PostInputs, PostInputTitle, SubmitPost } from "./CreatePostStyled";
import axios from "axios";
import { useState } from "react";
import { baseUrl } from "../../constants/Url";






export const CreatePostPage = () => {
    
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")


    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    };

    const onChangeBody = (event) => {
        setBody(event.target.value)
    };

    const onClickCreatePost = () => {
        
        const postBody = {

            title: title, 
            body: body
        }
        
        axios.post(`${baseUrl}/posts`, postBody, {
            headers: {
              Authorization: localStorage.getItem('token')
            }
          })
            .then((response) => {
                alert(`Your content has been successfully posted`)
                setTitle("")
                setBody("")
            })
            .catch((error) => {
              console.log(error)
    })
}

    return(
        <CreatePostPageContent>
            <Header/>
            <PageContent>
                <CreateTitle>
                    <h1>Create your <span>post</span></h1>
                </CreateTitle>
                <PostInputs>
                    <PostInputTitle 
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={onChangeTitle}
                        required
                    />
                    <PostInputBody 
                        type="text"
                        placeholder="Body"
                        value={body}
                        onChange={onChangeBody}
                        required
                    />
                </PostInputs>
                <SubmitPost type="button" onClick={onClickCreatePost}>Post</SubmitPost>
            </PageContent>
        </CreatePostPageContent>
    )
}