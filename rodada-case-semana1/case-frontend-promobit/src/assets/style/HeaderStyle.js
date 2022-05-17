import styled from "styled-components";

export const Header = styled.header`
    position: fixed;
    top: 0;
    height: 11vh;
    width: 100vw;
    background-color: rgba(92, 22, 197, 1);
    @media screen and (max-width: 750px){
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;