import styled from "styled-components";

/*----------------------------------------------HEADER------------------------------------------------------------------- */
export const Head = styled.header`
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #121519;
    box-shadow: 0 5px 20px #121519;
`
/*----------------------------------------------LOGO LABEDDIT------------------------------------------------------------------- */

export const LabedditLogo = styled.img`
    width: 14%;
    margin-left: 2%;
    cursor: pointer;
    
    @media screen and (max-width: 700px) {
        &{
            width: 18%;
        }
    }

    @media (min-width: 700px) and (max-width: 1024px) {
        &{
            width: 20%;      
        }
    }

`
/*----------------------------------------------INPUT SEARCH------------------------------------------------------------------- */
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
        
        @media screen and (max-width: 700px) {
        &{
            width: 18vw;
            margin-left: 1%;
        }
    }
`
/*----------------------------------------------USER FIELD------------------------------------------------------------------- */
export const LabedBot = styled.img`
    width: 35%;
    margin-left: 60%;
    @media screen and (max-width: 700px) {
        &{
            width: 80%;
            margin-left: 200%;
        }
    }

    @media (min-width: 700px) and (max-width: 1024px) {
        &{
            width: 60%;
            margin-left: 160%;      
        }
    }
`

export const Profile = styled.div`
    width: 25vw;
    height: 6vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 0.8rem;
    margin-right: 0.8rem;
    background-color: #1c222a;
    border-radius: 10px;
    border: none;
    color: whitesmoke;
        h1{
            font-family: 'Roboto', sans-serif;
            font-weight: 900;
            font-size: 1.3rem;
            margin-left: 4%;
            cursor: default;
        }

        p{
            font-family: 'Roboto', sans-serif;
            font-weight: 500;
            font-size: 100%;
            margin-right: 0.8rem;
            margin-left: 0.8rem;
            cursor: default;
            
        }
        :hover{
            border: 1px solid rgba(255, 255, 255, 0.336);
        }
        @media screen and (max-width: 700px) {
            &{
                width: 40vw;
                margin-left: 2%;
            }
            h1{
                font-size: 80%;
                 
            }
            p{
                font-size: 70%;
                margin-left: 0.3rem;
            }
        }
        @media (min-width: 700px) and (max-width: 1024px) {
        &{
            width: 40vw;      
        }
    }
`

export const User = styled.div`
    display: flex;
    width: 8vw;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    padding: 0.4rem;
    
`

/*----------------------------------------------LOGOUT------------------------------------------------------------------- */

export const LogoutIcon = styled.img`
    width: 20%;
    @media screen and (max-width: 700px) {
        &{
            width: 80%;
        }
    }
    @media (min-width: 700px) and (max-width: 1024px) {
        &{
            width: 60%;    
        }
    }       
`

export const LogoutButton = styled.button`
    cursor: pointer;
    display: flex;
    width: 8vw;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    padding: 0.4rem;
    background-color: transparent;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    color: white;
    font-size: 90%;
    border: none;
    transition: all 0.3s ease;
        p{
            cursor: pointer;
        }
        :hover{
            background-color: green;
        }

        @media screen and (max-width: 700px) {
        &{
            width: 8vw;
        }
        p{
            display: none; 
        }
        }
        @media (min-width: 700px) and (max-width: 1024px) {
        &{
            width: 8vw;    
        }
        p{
            display: none;
        }
    } 
`
