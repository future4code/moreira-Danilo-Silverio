import React from "react";
import { Main, PageWrapper } from "../../assets/styles/HomePage/HomeStyle";
import { Header } from "../../assets/styles/Headers/HeaderStyle";
import GithubLogo from "../../assets/images/github-logo.png";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import UserCard from "../../components/UserCard/UserCard";
import UserRepo from "../../components/UserRepo/UserRepositories";


const HomePage = () => {
    

    return (
        <PageWrapper>
            <Header>
                <img src={GithubLogo} alt="Github logo" />
               <SearchComponent/>
            </Header>
            <Main>
                <UserCard/>
                <UserRepo/>
            </Main>
        </PageWrapper>
    )
};

export default HomePage;