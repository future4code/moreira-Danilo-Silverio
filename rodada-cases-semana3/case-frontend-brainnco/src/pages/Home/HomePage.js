import React from "react";
import { Divider, PageContent } from "../../assets/styles/HomePage/HomeStyle";
import LoteryArea from "../../components/LoteryArea/LoteryArea";


const HomePage = () => {
    return (
        <PageContent>
            <div>
                <LoteryArea/>
            </div>
            <Divider/>
            <div></div>
        </PageContent>
    )
};

export default HomePage;