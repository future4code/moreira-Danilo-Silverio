import styled from "styled-components";


export const GuideContainer = styled.div`
     @media screen and (max-width: 750px){
        height: 85vh;
        margin-top: 11vh;
        padding: 3%;
        background-color: #2D0C5E;
     }
`;
export const Title = styled.div`
     @media screen and (max-width: 750px){
        width: fit-content;
        h1{
            text-align: justify;    
            font-weight: 700;
            font-size: 20px;
            line-height: 28px;
            width: 230px;
            margin-bottom: 15%;
            color: #fff;
        }
     }
`;
export const NavigationGenre = styled.div`
     @media screen and (max-width: 750px){
        h2{
            text-transform: uppercase;
            font-weight: 500;
            font-size: 12.5px;
            line-height: 20px;
            color: #fff;
        }
        button{
            margin: 1%;
            height: 32px;
            padding: 6px 16px;
            border: none;
            border-radius: 5px;
            font-family: "Roboto";
            font-weight: 700;
            font-size: 14px;
            line-height: 20px;
            background-color: #fff;
            color: #323232;
        }
     }
`;
export const MovieCard = styled.div`
    @media screen and (max-width: 750px){
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        height: fit-content;
        img{
            height: 180px;
            width: 100%;
            border-radius: 4px;
            box-shadow: 4px 4px 15px #a8a9ad79;
        }
        img::hover{
            box-shadow: 10px 10px 15px #a8a9add5;
            cursor: pointer;
        }
        h3{
            font-weight: 700;
            font-size: 13px;
            line-height: 15px;
            color: #000000;
        }
        h4{
            font-weight: 700;
            font-size: 11px;
            color: #646464;
        }
    }
`;
export const Catalog = styled.div`
    @media screen and (max-width: 750px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: center;
        max-width: 100vw;
        margin-top: 5%;
        padding: 6%;
        gap: 25px;
    }
`;
