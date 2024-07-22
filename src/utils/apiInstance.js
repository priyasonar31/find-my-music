import axios from "axios";

const apiInstance = axios.create({
    headers: { Accept: 'application/json', "Access-Control-Allow-Origin": "*", 'Access-Control-Allow-Credentials':true },
    baseURL: 'http://localhost:5001'
});

export default apiInstance;