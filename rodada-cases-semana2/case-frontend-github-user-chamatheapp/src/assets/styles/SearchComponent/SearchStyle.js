import styled from "styled-components";


export const SearchForm = styled.form`
    display: flex;
    align-items: center;
    width: 50%;
    gap: 2%;
`;
export const SearchInput = styled.input`
    height: 6vh;
    width: 90%;
    padding: 1% 1% 1% 4%;
    color: #fff;
    border: 1px solid gray;
    border-radius: 8px;
    background-color: #0d1117;
    ::placeholder{
        color: #fff;
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        font-size: 0.8rem;
    }
`;
export const SubmitInput = styled.input`
    height: 5vh;
    width: fit-content;
    border: none;
    border-radius: 8px;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 0.8rem;
    color: #fff;
    letter-spacing: 1px;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    :hover{
        background-color: rgba(255, 255, 255, 0.582);
    }
`;