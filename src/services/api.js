import axios from 'axios';

const api = axios.create({
    baseURL: 'https://rocketbox-banco.herokuapp.com',
});

export default api;