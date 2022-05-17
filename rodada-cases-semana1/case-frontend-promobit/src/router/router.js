import React from "react";
import { Routes, Route } from "react-router-dom";
import MovieFeed from "../pages/Movies/MovieFeed";



const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<MovieFeed/>}/>
        </Routes>
    )
};

export default Router;