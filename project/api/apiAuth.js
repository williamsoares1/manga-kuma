import axios from "axios";

//usando o serveo.net
const url = "***";

const apiAuth = axios.create({
    baseURL: url
})

export default apiAuth;