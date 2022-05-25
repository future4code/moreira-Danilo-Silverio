import React from "react";
import { PageWrapper } from "../../assets/styles/HomePage/HomeStyle";
import { Header } from "../../assets/styles/Headers/HeaderStyle";
import GithubLogo from "../../assets/images/github-logo.png";
import SearchComponent from "../../components/SearchComponent/SearchComponent";

const HomePage = () => {
    

    return (
        <PageWrapper>
            <Header>
                <img src={GithubLogo} alt="Github logo" />
               <SearchComponent/>
            </Header>
            <div>
                
            </div>
        </PageWrapper>
    )
};

export default HomePage;