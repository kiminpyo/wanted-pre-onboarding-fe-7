import axios from "axios";

const token = window.localStorage.getItem("token");

export const axiosInstance = new axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        Authorization: `Bearer ${token}`,
    },
});
