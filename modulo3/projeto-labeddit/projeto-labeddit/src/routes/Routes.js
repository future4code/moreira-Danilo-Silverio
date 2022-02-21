import React from "react";
import { HomePage } from "../pages/01.HomePage/Home";
import { LoginPage } from "../pages/02.LoginPage/Login";
import { SignUpPage } from "../pages/03.SignUpPage/SignUp";
import { FeedPage } from "../pages/04.FeedPage/Feed";
import { PostsPage } from "../pages/05.PostPage/Posts";
import { ErrorPage } from "../pages/06.ErrorPage/ErrorPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";







export const AllRoutes = () => {


    return(
        <Router>
            <Routes>
                <Route exact path={"/"} element={<HomePage/>}/>
                <Route exact path={"/labeddit/login"} element={<LoginPage/>}/>
                <Route exact path={"/labeddit/signup"} element={<SignUpPage/>}/>
                <Route exact path={"/labeddit/feed"} element={<FeedPage/>}/>
                <Route exact path={"/labeddit/posts"} element={<PostsPage/>}/>
                <Route exact path={"*"} element={<ErrorPage/>}/>
            </Routes>
        </Router>
    )
};