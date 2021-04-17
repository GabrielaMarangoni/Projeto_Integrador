import Axios from 'axios';

const api = Axios.create({
    baseURL: 'localhost:3333'
})

export default api;