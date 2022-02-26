import styled from "styled-components";



/*----------------------------------------------FEED PAGE------------------------------------------------------------------- */
export const PageContainer = styled.div`
    background-color: #242b35;
`
export const FeedContent = styled.div`
    display: grid;
    grid-template-columns:10% 1fr 10%;
    background-color: #242b35;

    @media screen and (max-width: 700px) {
        &{
            grid-template-columns: 1fr;
        }

    }

`

/*----------------------------------------------FIRST COLUMN------------------------------------------------------------------- */

export const FirstColumn = styled.div`
   background-color: #242b35;
   margin-top: 5vh;
 
   @media screen and (max-width: 700px) {
        &{
            display: none;
        }

    }
`

/*----------------------------------------------MAIN COLUMN------------------------------------------------------------------- */

export const MainColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5vh;
    background-color: #242b35;
    height: 1000vh;
    
    @media screen and (max-width: 700px) {
        &{
            margin-top: 13vh;
        }
    }
`
export const CreatePost = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    width: 70%;
    height: 8vh;
    padding: 0.8%;
    border-radius: 5px;
    margin-top: 6%;
        input{
            background-color: #f6f7f8;
            border: 1px solid #edeff1;
            width: 80%;
            height: 60%;
            border-radius: 5px;
            padding-left: 1%;
            :hover{
                border: 1px solid #259cd3;
            }
        }
        button{
            background-color: green;
            border: none;
            margin-left: 2%;
            height: 80%;
            width: 10%;
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
        }

        @media screen and (max-width: 700px) {
        &{
            width: 95%;
        }
        button{
            width: 20%;
        }
    }
    
`
export const Feed = styled.div`
    margin-top: 3%;
    width: 70%;
    background-color: #242b35;
    @media screen and (max-width: 700px) {
        &{
            width: 95%;
        }
    }
`

export const Labebott = styled.img`
    width: 8%;
    background-color: #f9da7c;
    border-radius: 100px;
    margin-right: 3%;
    margin-left: 1%;
`
/*----------------------------------------------POST------------------------------------------------------------------- */

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 12%;
    margin-bottom: 3%;
    background-color: whitesmoke;
    border-radius: 8px;
    border: 1px solid whitesmoke;
    transition: all 0.2s ease;
    div{
        padding: 1%;
    }
    img{
        background-color: #121519;
        border-radius: 100px;
        padding: 0.5% 0.5% 0 0.5%;
        width: 6%;
    }
    :hover{
        cursor: pointer;
        border: 1px solid black;
        box-shadow: 1px 1px 40px black;
    }
`
export const PostHeader = styled.div`
    display: flex;
    align-items: center;
`

export const UserNick = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 90%;
    margin-left: 1%;
`

export const PostInfo = styled.p`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 500;
    color: #a6a9aa;
    font-size: 70%;
    margin-left: 1%;
    @media screen and (max-width: 700px) {
        &{
            width: 95%;
            font-size: 60%;
        }
    }
`
export const PostDate = styled.p`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 500;
    color: #a6a9aa;
    font-size: 70%;
    margin-left: 1%;
    @media screen and (max-width: 700px) {
        &{
            margin-left: 0;
            width: 95%;
            font-size: 42%;
        }
    }
`
export const PostContent = styled.div`
    margin-left: 1%;
`

export const PostTitle = styled.h1`
    font-family: 'Roboto', sans-serif;
    @media screen and (max-width: 700px) {
        &{
            font-size: 90%;
        }
    }
`

export const PostBody = styled.p`
    font-family: 'Roboto', sans-serif;
    margin-top: 3%;
    border: 1px solid #c7d9f0;
    padding: 3%;
    border-radius: 20px;
    background-color: #d2dae1;
    @media screen and (max-width: 700px) {
        &{
            font-size: 90%;
        }
    }
`

export const PostFooter = styled.div`
    display: flex;
    margin: 0 1%;
    align-items: center;
    justify-content: space-between;
    button{
        bottom: 0;
        padding: 0.5rem 0.5rem;
        background-color: transparent;
        border-radius: 8px;
        border: none;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        color: gray;
    }
    button:hover{
        background-color: #c0cad8;
        cursor: pointer; 

    }
`

/*----------------------------------------------THIRD COLUMN------------------------------------------------------------------- */

export const ThirdColumn = styled.div`
    background-color: #242b35;
    margin-top: 5vh;

    @media screen and (max-width: 700px) {
        &{
            display: none;
        }

    }
`
