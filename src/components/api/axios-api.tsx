import axios from 'axios';

const API_KEY = process.env.REACT_APP_BACKEND_API_KEY;

const api = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
    headers: {
        'x-api-key': API_KEY || '',
    }
})

export default api;