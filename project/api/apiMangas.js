import axios from "axios";

//usando o ngrok
const url = "***"

const apiMangas = axios.create({
    baseURL: url
})

export default apiMangas;