import styled from "styled-components";




/*---------------------------------------------------HOME PAGE------------------------------------------------------- */

export const HomePageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #121519;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 700px) {
        &{
            display: flex;
            flex-direction: column;
        }
    }

    @media (min-width: 700px) and (max-width: 1024px) {
        &{
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }
`

/*---------------------------------------------------HOME (LEFT COLUMN)------------------------------------------------------- */

export const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 45vw;
    height: 60vh;
    margin-left: 10%;

    @media screen and (max-width: 700px) {
        &{
            width: 100vw;
            margin-left: 0;
        }

        img{
            width: 80%;
        }
    }

    @media (min-width: 700px) and (max-width: 1024px) {
        &{
            width: 50vw;
            margin-left: 8%;
        }

        img{
            width: 40%;
        }

        p{
            margin-left: 3px;
            font-size: 15px;
        }
    }
   
`


export const Logo = styled.img`
    margin-top: 7%;
    width: 50%;
`

export const Motto = styled.p`
    margin-left: 15px;
    margin-top: 4%;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 24px;
    color: white;
`



/*---------------------------------------------------INPUT FIELD (RIGHT COLUMN)------------------------------------------------------- */


export const Fieldset = styled.div`
    display: flex;
    flex-direction: column;
    width: 30vw;
    height: 55vh;
    padding: 20px;
    border-radius: 20px;
    text-align: center;
    background-color: #090a0c;
    color: white;
    border: none;
    box-shadow: 8px 8px 20px rgb(0, 0, 0);
    margin-left: 50%;
    transform: translateX(-50%);
    
    @media screen and (max-width: 700px) {
        &{
            width: 80vw;
            margin-bottom: 20px;
        }

    }

    @media (min-width: 700px) and (max-width: 1024px) {
        &{
            width: 40vw;
            ;
        }
    }
`

export const TextField = styled.input`
    height: 50px;
    width: 97%;
    border: 1px solid #dfdfdf;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-left: 10px;
    border-radius: 7px;
    background-color: white;
    color: black;
    font-weight: 500;
`

export const LoginButton = styled.button`
    height: 50px;
    width: 100%;
    border: none;
    margin-top: 10px;
    border-radius: 7px;
    color: white;
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: 20px;
    background-color: #fe7e03;
        :hover{
            cursor: pointer;
            background-color: #df6f06;
        }
`

export const ForgotPassword = styled.p`
    margin-top: 20px;
    color: #349dff;
    padding-bottom: 20px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 15px;
    letter-spacing: 1px;
    font-weight: 500;
    border-bottom: 1px solid rgba(161, 161, 161, 0.507);
    :hover{
            cursor: pointer;
            text-decoration: underline;
        }

`

export const SignupButton = styled.button`
    height: 50px;
    width: 60%;
    border: none;
    margin-top: 20px;
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

export const JoinUs = styled.p`
    margin-left: 30%;
    margin-top: 3%;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: rgb(49, 48, 49);
    color: white;

    @media screen and (max-width: 700px) {
        &{
            margin-left: 40px;
            margin-bottom: 10px;
        }

    }

    @media (min-width: 700px) and (max-width: 1024px) {
        &{
            margin-left: 60px;
        }
    }
`