import axios from "axios";

export const axiosInstanace = axios.create({
    baseURL: `${BACKEND_URL}/api`,
    withCredentials: true,
})