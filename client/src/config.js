import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : "https://handsome-hen-stole.cyclic.app/api/"
})