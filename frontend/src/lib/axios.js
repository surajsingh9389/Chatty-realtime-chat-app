import axios from "axios"
import dotenv from "dotenv"

const BaseUrl = import.meta.env.BACKEND_URL

export const axiosInstanace = axios.create({
    baseURL: `${BaseUrl}/api`,
    withCredentials: true,
})