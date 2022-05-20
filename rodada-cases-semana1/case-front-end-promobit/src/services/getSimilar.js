import axios from "axios";
import { API_KEY, movieUrl } from "../constants/url";

export const getSimilar = async (id) => {
    try {
        const { data } = await axios.get(`${movieUrl}/${id}/similar${API_KEY}&language=pt-BR`);
        
        return data.results;

    } catch (error) { }
}