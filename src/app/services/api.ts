import axios from "axios";


const api = axios.create({
    baseURL: 'https://api-foods-production.up.railway.app/',
    headers: {
        Accept: 'application/json',
        Content: 'application/json'
    }
});

export default api;