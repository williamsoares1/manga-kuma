import axios from 'axios';

export const api = axios.create({
  // baseURL: "https://mangahook.serveo.net",
  baseURL: "http://localhost:3000",
});
