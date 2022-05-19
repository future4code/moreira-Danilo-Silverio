import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;
    height: 10vh;
    max-width: 100vw;
    padding-left: 5%;
    background-color: #5C16C5;
    @media screen and (max-width: 750px) {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
    }
`;