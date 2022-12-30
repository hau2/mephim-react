import axios from 'axios';
import Constant from "../shared/constants";
const cors = require('cors');

// const config = {
//     headers: {
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
//         "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsY2hhdTEiLCJyb2xlcyI6WyJST0xFX0FETUlOIl0sImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6OTA5MC9hcGkvbG9naW4iLCJleHAiOjE2Njk3NzQ5MDh9.gDW2aTJlp2Wi9_qSjUv5eoWdISwErg_SYPXijsflYEc",
//     }
// };

export const request = axios.create({
    baseURL: Constant.BASE_URL
});

request.interceptors.request.use(async (config) => {
    config.headers = {...config.headers, "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsY2hhdTEiLCJyb2xlcyI6WyJST0xFX0FETUlOIl0sImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6OTA5MC9hcGkvbG9naW4iLCJleHAiOjE2Njk4MDA3MjJ9.VC-hkiGcubU-RWPT0-0P-by5FasJ_ZUKKncfRQ6qM8E"};
    return config;
});

export const get = async (path: string, options = {}) => {
    const response = await request.get(path);
    return response.data;
};

export const post = async (path: string, data: any) => {
    const response = await request.post(path, data);
    return response.data;
};
