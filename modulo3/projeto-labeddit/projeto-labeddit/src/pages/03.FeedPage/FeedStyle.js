import styled from "styled-components";



/*----------------------------------------------FEED PAGE------------------------------------------------------------------- */
export const FeedPageContainer = styled.div`
    background-color: #242b35;
`
export const FeedContent = styled.div`
    display: grid;
    grid-template-columns:10% 1fr 10%;
    background-color: #242b35;

`

/*----------------------------------------------FIRST COLUMN------------------------------------------------------------------- */

export const FirstColumn = styled.div`
   background-color: #242b35;
   margin-top: 5vh;
   
`

/*----------------------------------------------MAIN COLUMN------------------------------------------------------------------- */

export const MainColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5vh;
    background-color: #242b35;
    height: 1000vh;
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
    
`
export const Feed = styled.div`
    margin-top: 3%;
    width: 70%;
    background-color: #242b35;
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
    div{
        padding: 1%;
    }
    img{
        background-color: #121519;
        border-radius: 100px;
        padding: 0.5% 0.5% 0 0.5%;
        width: 6%;
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
`
export const PostDate = styled.p`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 500;
    color: #a6a9aa;
    font-size: 70%;
    margin-left: 1%;
`
export const PostContent = styled.div`
    margin-left: 1%;
`

export const PostTitle = styled.h1`
    font-family: 'Roboto', sans-serif;
`

export const PostBody = styled.p`
    font-family: 'Roboto', sans-serif;
    margin-top: 3%;
    border: 1px solid #c7d9f0;
    padding: 3%;
    border-radius: 20px;
    background-color: #d2dae1;
`

export const PostFooter = styled.div`
    margin-left: 1%;
    display: flex;
    justify-content: space-between;
    button{
        bottom: 0;
    }
`

/*----------------------------------------------THIRD COLUMN------------------------------------------------------------------- */

export const ThirdColumn = styled.div`
    background-color: #242b35;
    margin-top: 5vh;
`
