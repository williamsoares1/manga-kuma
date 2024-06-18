import axios from "axios";

const api = axios.create({
    baseURL: "https://1c72-2804-56c-d7cb-1d00-e89f-925-cba9-7bd9.ngrok-free.app"
})

export default api;