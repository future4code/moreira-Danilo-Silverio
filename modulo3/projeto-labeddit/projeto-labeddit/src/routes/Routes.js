import React from "react";
import { LoginPage } from "../pages/01.LoginPage/LoginPage";
import { SignUpPage } from "../pages/02.SignUpPage/SignUp";
import { FeedPage } from "../pages/03.FeedPage/Feed";
import { PostsPage } from "../pages/04.PostPage/Posts";
import { ErrorPage } from "../pages/05.ErrorPage/ErrorPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";







export const AllRoutes = () => {


    return(
        <Router>
            <Routes>
                <Route exact path={"/labeddit/login"} element={<LoginPage/>}/>
                <Route exact path={"/labeddit/signup"} element={<SignUpPage/>}/>
                <Route exact path={"/"} element={<FeedPage/>}/>
                <Route exact path={"/labeddit/posts"} element={<PostsPage/>}/>
                <Route exact path={"*"} element={<ErrorPage/>}/>
            </Routes>
        </Router>
    )
};