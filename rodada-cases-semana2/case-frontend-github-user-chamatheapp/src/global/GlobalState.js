import React, { useState } from "react";
import { getUser } from "../services/getUser";
import GlobalContext from "./GlobalContext";

const GlobalState = (props) => {
    
    const [ userData, setUserData ] = useState([]);
    const [ username, setUsername ] = useState("");


    async function fetchData(username) {
        setUserData(await getUser(username))
    };

    function onChangeUsername (event) {
        setUsername(event.target.value);
    };

    function onSubmitForm (event) {
        event.preventDefault();
        fetchData(username);
        setUsername("");
        console.log(userData);
    };






    const data = {
        userData,
        username,
        setUserData,
        setUsername,
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