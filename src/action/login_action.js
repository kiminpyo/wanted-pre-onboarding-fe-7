import axios from "axios";
import { BASE_URL } from "../config";
import { INIT } from "./type";

export const loginUser = async (loginData) => {
    const request = await axios
        .post(`${BASE_URL}/auth/signin`, loginData)
        .then((response) => {
            console.log(response);
            return response.data;
        });

    return {
        type: INIT,
        payload: request,
    };
};
