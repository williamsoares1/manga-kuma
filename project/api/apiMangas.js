import axios from "axios";

//usando o ngrok

const apiMangas = axios.create({
    baseURL: "***"
})

export default apiMangas;