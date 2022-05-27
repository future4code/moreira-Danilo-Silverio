import React, { useState } from "react";
import getUser from "../services/getUser";
import getUserRepo from "../services/getUserRepo";
import GlobalContext from "./GlobalContext";

const GlobalState = (props) => {
    
    const [ username, setUsername ] = useState("");
    const [ userData, setUserData ] = useState([]);
    const [ userRepo, setUserRepo ] = useState([]);

    async function fetchData() {
        if(username !== "") {
            setUserData(await getUser(username));
            setUserRepo(await getUserRepo(username));
        } else if (!username) {
            setUsername(false)
        }
    };

    function onChangeUsername (event) {
        setUsername(event.target.value);
    };

    function onSubmitForm (event) {
        event.preventDefault();
        fetchData(username);
        setUsername("");
    };

    console.log(userData)
    console.log(userRepo)
    const data = {
        userData,
        username,
        userRepo,
        onChangeUsername,
        onSubmitForm
    };

    return (
        <GlobalContext.Provider value={data}>
            {props.children}
        </GlobalContext.Provider>
    );
};
    
export default GlobalState;