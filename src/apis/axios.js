import axios from "axios";
import { BASE_URL } from "../config";

const token = window.localStorage.getItem("token");

export const axiosInstance = new axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

