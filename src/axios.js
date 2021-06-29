import axios from "axios";

const instance = axios.create({
    baseURL: 'https://picbox-mern.herokuapp.com/',
    withCredentials: true,
})

export default instance;