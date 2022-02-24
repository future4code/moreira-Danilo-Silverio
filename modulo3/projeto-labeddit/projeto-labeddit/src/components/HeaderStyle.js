import styled from "styled-components";


export const Head = styled.header`
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #121519;
`

export const LabedditLogo = styled.img`
    width: 14%;
    margin-left: 2%;
`

export const SearchOnLabeddit = styled.input`
    width: 25vw;
    height: 5vh;
    border-radius: 8px;
    padding: 0.3rem;
    background-color: whitesmoke;
    border: 1px solid whitesmoke;
        :hover{
            border: 2px solid #74aefa;
        }
`

export const Profile = styled.div`
    width: 15vw;
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 0.8rem;
    background-color: #1c222a;
    border-radius: 10px;
    border: none;
    color: whitesmoke;
        h1{
            font-family: 'Roboto', sans-serif;
            font-weight: 500;
            font-size: 1.3rem;
            margin-left: 4%;
            margin-right: 4%;
        }

        p{
            font-family: 'Roboto', sans-serif;
            font-weight: 100;
            font-size: 1rem;  
        }
`
export const LabedBot = styled.img`
    width: 15%;
`

