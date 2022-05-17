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
            margin-bottom: 10%;
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