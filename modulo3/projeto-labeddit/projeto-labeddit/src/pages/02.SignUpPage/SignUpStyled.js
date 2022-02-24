import styled from "styled-components";


export const LabeBot = styled.img`
    width: 3%;
    position: absolute;
    left: 1%;
    bottom: 1%;

    @media screen and (max-width: 700px) {
        &{
            width: 10%;
        }

    }

    @media (min-width: 700px) and (max-width: 1024px) {
        &{
            width: 5%;
            ;
        }
    }
`
export const Labe = styled.img`
    width: 10%;
    position: absolute;
    left: 4%;
    bottom: 1%;
    @media screen and (max-width: 700px) {
        &{
            width: 20%;
            left: 11%;
            bottom: 2%;
        }

    }

    @media (min-width: 700px) and (max-width: 1024px) {
        &{
            width: 10%;
            left: 7%;
            bottom: 2%;
            ;
        }
    }
`

export const BackButton = styled.button`
    position: absolute;
    top: 2%;
    right: 2%;
    width: 8%;
    height: 8%;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 10px;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    color: white;
    transition: all 0.3s ease;
        :hover{
            background-color: rgba(248, 248, 248, 0.658);
            cursor: pointer;
        }

    @media screen and (max-width: 700px) {
        &{
            width: 20%;

        }

    }

    @media (min-width: 700px) and (max-width: 1024px) {
        &{
            width: 10%;

        }
    }
`

export const SignUpContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #121519;
    justify-content: center;
    align-items: center;
`

export const Fieldset = styled.div`
    display: flex;
    flex-direction: column;
    width: 30vw;
    height: 70vh;
    padding: 20px;
    border-radius: 20px;
    text-align: center;
    background-color: #090a0c;
    color: white;
    border: none;
    box-shadow: 8px 8px 20px rgb(0, 0, 0);

    @media screen and (max-width: 700px) {
        &{
            width: 80vw;
        }

    }

    @media (min-width: 700px) and (max-width: 1024px) {
        &{
            width: 50vw;
            ;
        }
    }
`

export const FieldsetTittle = styled.h1`
    font-size: 50px;
    font-family: 'Roboto', sans-serif;
`

export const FieldsetDescription = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 13px;
    margin-top: 5%;  
    margin-bottom: 5%;  
`

export const TextField = styled.input`
    height: 50px;
    width: 97%;
    border: 1px solid #dfdfdf;
    margin-bottom: 2%;
    padding-left: 10px;
    border-radius: 7px;
    background-color: white;
    color: black;
    font-weight: 500;
`

export const Terms = styled.p`
    font-family: sans-serif;
    font-weight: 100;
    font-size: 14px;
    margin-top: 3%;
    margin-bottom: 6%;
    span{
        color: rgb(11, 162, 250);
    }
`
export const SignupButton = styled.button`
    height: 50px;
    width: 60%;
    border: none;
    padding-left: 10px;
    border-radius: 7px;
    background-color: #09ba2f;
    color: white;
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: 17px;
    margin-left: 50%;
    transform: translateX(-50%);
    :hover{
            cursor: pointer;
            background-color: #079927;
        }
`