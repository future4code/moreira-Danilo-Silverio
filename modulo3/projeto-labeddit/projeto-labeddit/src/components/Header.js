import styled from "styled-components";
import { Head, LabedditLogo, Profile, SearchOnLabeddit, LabedBot, LogoutIcon, LogoutButton, User } from "./HeaderStyle";
import Logo from "../assets/logo.png"
import Logout from "../assets/logout.png"
import LabeBot from "../assets/labedbot.png"


export const Header = () => {

    const user = localStorage.getItem("username")

    return(
        <Head>
            <LabedditLogo src={Logo} alt="Labeddit logo" />
            <div>
            
            <SearchOnLabeddit 
                type="text"
                placeholder=" 🔍 search on labeddit"
            />
            </div>
            <Profile>
                <User>
                    <LabedBot src={LabeBot} alt="Avatar profile" />
                    <h1>Hi, </h1>
                    <p>@{user}</p>
                </User>
                <LogoutButton>
                    <LogoutIcon src={Logout} alt="Logout Icon" />
                    <p>Logout</p>
                </LogoutButton>
            </Profile>
        </Head>
    )
};