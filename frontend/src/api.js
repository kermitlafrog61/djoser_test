import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8000' // or your Django app URL
});

export default instance;
