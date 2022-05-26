import styled from "styled-components";

export const UserContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: 20rem;
    padding: 2%;
    margin: 5% 0 5% 3%;
    border-radius: 10px;
    box-shadow: 20px 20px 30px #000;
    background-color: #161b22;
    h1{
        font-size: 1.7rem;
        color: #C9D1D9;
    }
    h2{
        font-size: 1.4rem;
        font-weight: 300;
        color: #8B949E;
    }
    p{
        display: flex;
        align-items: flex-end;
        font-size: 0.9rem;
        font-weight: 300;
        gap: 2%;
        color: #fff;
        span{
            font-weight: 700;
        }
    }
    @media screen and (max-width: 770px) {
        width: 80%;
        padding: 5% 5% 5% 5%;
        margin: 20% 0 20% 0%;
        border-radius: 10px;
        background-color: transparent;
    }
`;
export const ProfilePicture = styled.img`
    align-self: center;
    height: 10rem;
    width: 10rem;
    border-radius: 100%;
    margin-bottom: 10%;
`;
export const Icon = styled.img`
    height: 1.5rem;
    margin-right: 1.8%;
`;
