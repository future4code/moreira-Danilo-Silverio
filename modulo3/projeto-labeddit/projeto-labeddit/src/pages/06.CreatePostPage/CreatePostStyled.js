import styled from "styled-components";

export const CreatePostPageContent = styled.div`
    height: 100vh;
    background-color: #242b35;
`

export const PageContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: #f6f7f8;
    width: 50vw;
    height: 70%;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-top: 2%;
    padding: 2%;
    border-radius: 8px;
    @media screen and (max-width: 700px) {
            &{
                margin-top: 10%;
                width: 70vw;
            }
        }
    @media (min-width: 700px) and (max-width: 1024px) {
        &{
            margin-top: 4%;
            width: 50vw;
        }
    }
`

export const CreateTitle = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    border-bottom: 1px solid #47505e;
    width: 90%;
    color: #47505e;
    padding-bottom: 2%;
        span{
            color: #fe7e05;
        }
        @media screen and (max-width: 700px) {
            &{
                width: 100%;
                font-size: 0.8rem;
                padding-top: 8%;
                padding-bottom: 8%;
            }
        }
        @media (min-width: 700px) and (max-width: 1024px) {
            &{
                width: 100%;
                font-size: 1rem;
                padding-top: 8%;
                padding-bottom: 8%;
            }
    }
`
export const PostInputs = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 8%;
    font-family: 'Roboto', sans-serif;
`


export const PostInputTitle = styled.input`
    width: 45vw;
    height: 2vw;
    margin-bottom: 4%;
    border-radius: 5px;
    border: 1px solid #47505e;
    overflow-wrap: break-word;
    padding-left: 0.3rem;
    @media screen and (max-width: 700px) {
            &{
                height: 10vw;
                width: 60vw;
            }
        }
    @media (min-width: 700px) and (max-width: 1024px) {
            &{
                height: 5vw;
                width: 45vw;
            }
    }
`

export const PostInputBody = styled.input`
    width: 45vw;
    height: 10vw;
    border-radius: 5px;
    border: 1px solid #47505e;
    overflow-wrap: break-word;
    padding-left: 0.3rem;
        @media screen and (max-width: 700px) {
            &{
                height: 40vw;
                width: 60vw;
            }
        }
        @media (min-width: 700px) and (max-width: 1024px) {
            &{
                height: 25vw;
                width: 45vw;
            }
    }
    
`

export const SubmitPost = styled.button`
    background-color: green;
    border: none;
    margin-top: 8%;
    height: 9%;
    width: 30%;
    border-radius: 100px; 
    color: white;
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: 1rem;
    transition: all 0.3s ease;
        :hover{
            cursor: pointer;
            background-color: #0ab70a;
            }
            @media screen and (max-width: 700px) {
            &{
                height: 9%;
                width: 40%;
            }
        }
`