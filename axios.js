import axios from "axios";

const server = axios.create({
    baseURL:'https://nesfli-back.onrender.com/api'
})

export default server;