import styled from "styled-components";

export const RepositoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: 70%;
    padding: 2%;
    margin: 5% 0 5% 3%;
    gap: 10px;
    border-radius: 10px;
    @media screen and (max-width: 770px){
        align-items: center;
        width: 90%;
    }
`;
export const UserRepositories = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
    height: 8rem;
    width: 100%;
    border-bottom: 1px solid #C1D1D9;
    color: #C9D1D9;
    a{
        font-size: 1.6rem;
        font-weight: 700;
        color: #58A6FF;
    }
    @media screen and (max-width: 770px){
        display: flex;
        flex-direction: column;
        width: 90%;
        height: fit-content;
    }
`;
export const RepositoryInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    img{
        height: 1.9rem;
    }
    p{
        text-align: center;
        display: flex;
        align-items: center;
        font-size: 1.2rem;
        font-weight: 300;
    }
`;
export const RepositoryInfo1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20%;
    img{
        height: 1.9rem;
    }
    p{
        text-align: center;
        display: flex;
        align-items: center;
        font-size: 1.2rem;
        font-weight: 300;
    }
    @media screen and (max-width: 770px){
        img{
            height: 1.4rem;
        }
    }
`;
export const RepositoryNotFound = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50vh;
    width: 45%;
    margin-top: 10%;
    border-radius: 10px;
    background-color: #161b22;
    h1{
        font-size: 2rem;
        color: #C9D1D9;
    }
    @media screen and (max-width: 770px){
        height: 30vh;
        width: 90%;
        margin-bottom: 5%;
        h1{
            font-size: 1.3rem;
        }  
    }
`;
