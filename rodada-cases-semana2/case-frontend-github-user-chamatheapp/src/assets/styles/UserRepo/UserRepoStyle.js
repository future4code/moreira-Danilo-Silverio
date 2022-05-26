import styled from "styled-components";

export const RepositoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: 70%;
    padding: 2%;
    margin: 5% 0 5% 3%;
    gap: 20px;
    border-radius: 10px;
    @media screen and (max-width: 770px){
        align-items: center;
        width: 90%;
    }
`;
export const UserRepositories = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: fit-content;
    width: 100%;
    margin-bottom: 5%;
    border-bottom: 1px solid #C1D1D9;
    box-shadow: 5px 5px 20px #000;
    color: #C9D1D9;
    h2{
        font-size: 1.3rem;
        font-weight: 700;
        color: #58A6FF;
    }
    img{
        height: 0.8rem;
    }
    p{
        font-size: 0.8rem;
        font-weight: 300;
    }
    @media screen and (max-width: 770px){
        display: flex;
        flex-direction: column;
        width: 90%;
    }
`;
