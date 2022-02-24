import styled from "styled-components";
import { Head, LabedditLogo, Profile, SearchOnLabeddit, LabedBot } from "./HeaderStyle";
import Logo from "../assets/logoFeed.png"
import LabeBot from "../assets/labedbot.png"


export const Header = () => {

    const user = localStorage.getItem("username")

    return(
        <Head>
            <LabedditLogo src={Logo} alt="Labeddit logo" />
            <SearchOnLabeddit 
                type="text"
                placeholder=" 🔍 search on labeddit"
            />
            <div>
            
            <SearchOnLabeddit 
                type="text"
                placeholder=" 🔍 search on labeddit"
            />
            </div>
            <Profile>
                <LabedBot src={LabeBot} alt="Avatar profile" />
                <h1>Hi, </h1>
                <p>@{user}</p>
            </Profile>
                <button>Logout</button>
            
        </Head>
    )
};