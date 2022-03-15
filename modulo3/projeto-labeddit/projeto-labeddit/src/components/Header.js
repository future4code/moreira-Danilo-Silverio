import { useNavigate } from "react-router-dom";
import { Head, LabedditLogo, Profile, SearchOnLabeddit, LabedBot, LogoutIcon, LogoutButton, User } from "./HeaderStyle";
import Logo from "../assets/logo.png"
import Logout from "../assets/logout.png"
import LabeBot from "../assets/labedbot.png"


export const Header = () => {

    const user = localStorage.getItem("username")

    const navigate = useNavigate()

    const homeFeed = () => {
        navigate("/")
    }

    const logout = () => {
        localStorage.removeItem("token")
        navigate("/labeddit/login")
    } 

    return(
        <Head>
            <LabedditLogo src={Logo} onClick={homeFeed} alt="Labeddit logo" />
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
                <LogoutButton onClick={logout}>
                    <LogoutIcon src={Logout} alt="Logout Icon" />
                    <p>Logout</p>
                </LogoutButton>
            </Profile>
        </Head>
    )
};