import styled from "styled-components";

export const MovieCard = styled.div`
     @media screen and (max-width: 750px){
        img{
            height: 220px;
            width: 100%;
            border-radius: 4px;
            box-shadow: 4px 4px 8px #a8a9ad;
        }
        h3{
            font-weight: 700;
            font-size: 0.9rem;
            line-height: 15px;
            width: 93%;
            color: #000000;
        }
        h4{
            font-weight: 700;
            font-size: 0.7rem;
            color: #646464;
        }
        
     }
`;
export const Vote = styled.div`
     @media screen and (max-width: 750px){
            display: flex;
            align-items: center;
            justify-content: center;
            width: 9%;
            height: 4%;
            font-size: 0.6rem;
            font-weight: 700;
            padding: 4%;
            margin-top: 3%;
            border-radius: 5px;
            background-color: #5C16C5;
            color: #fff;
     }
`;
export const Catalog = styled.div`
     @media screen and (max-width: 750px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: 5%;
        gap: 20px;
        padding: 3%;
     }
`;

