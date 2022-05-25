import axios from "axios";
import { BASE_URL, USERS } from "../constants/urls";

export const getUser = async (username) => {
    try {
        const {data} = await axios.get(`${BASE_URL}${USERS}${username}`)
        
        return [data]

    } catch (error) {
        alert(error.message)
    }
};