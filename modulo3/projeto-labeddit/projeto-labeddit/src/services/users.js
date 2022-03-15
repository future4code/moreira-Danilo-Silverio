import axios from "axios";
import { baseUrl } from "../constants/Url";
import { goToFeedPage } from "../routes/Coordinator";




/*-------------------------LOGIN----------------------------- */

export const onSubmitLogin = (body, clear, navigate) => {
    axios.post(`${baseUrl}/users/login`, body)
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            clear()
            goToFeedPage(navigate)
        })
        .catch((error) => {
            
            /* alert("Ops, sorry! Try to put a diferent email/password!") */
        })
}


/*-------------------------SIGN UP----------------------------- */



