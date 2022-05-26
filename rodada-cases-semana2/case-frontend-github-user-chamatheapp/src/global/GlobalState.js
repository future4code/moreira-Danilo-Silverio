import React, { useState } from "react";
import { getUser } from "../services/getUser";
import { getUserRepo } from "../services/getUserRepo";
import GlobalContext from "./GlobalContext";

const GlobalState = (props) => {
    
    const [ userData, setUserData ] = useState([]);
    const [ username, setUsername ] = useState("");
    const [ userRepo, setUserRepo ] = useState([]);

    async function fetchData(username) {
        setUserData(await getUser(username));
        setUserRepo(await getUserRepo(username));
    };

    function onChangeUsername (event) {
        setUsername(event.target.value);
    };

    function onSubmitForm (event) {
        event.preventDefault();
        fetchData(username);
        setUsername("");
    };

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