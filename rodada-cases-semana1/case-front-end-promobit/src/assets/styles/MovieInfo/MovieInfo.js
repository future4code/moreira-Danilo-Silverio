import styled from "styled-components";

export const InformationField = styled.div`
    height: 100vh;
`;
export const MovieInformation = styled.div`
    margin-top: 10vh;
    height: 70vh;
    background-color: #2D0C5E;
    z-index: -1000;
`;
export const InfoCard = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-around   ;
    padding: 4%;
    gap: 5%;
`;
export const Poster = styled.div`
    height: 65vh;
    img{
        height: 110%;
        width: 18rem;
        z-index: 1000;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        border-radius: 8px;
    }
`;
export const Details = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
`;
export const HeadInfo = styled.div`
    h1{
        display: block;
        font-weight: 700;
        font-size: 2rem;
        color: #fff;
    }
    p{
        font-weight: 400;
        font-size: 0.9rem;
        color: #fff;
        margin-top: 5%;
    }
    span{
        margin-right: 1%;
        padding: 1%;
        border-radius: 10px;
        font-size: 0.9rem;
        font-weight: 900;
        background-color: #f29807;
    }
`;
export const MovieGenre = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 18px;
    p{
        font-weight: 300;
        font-size: 0.8rem;
        margin: 0;
    }
`;
export const Overview = styled.div`
    h2{
        font-weight: 700;
        font-size: 1.3rem;
        color: #fff;
    }
    p{
        font-weight: 400;
        font-size: 0.9rem;
        width: 90%;
        color: #fff;
    }
`;