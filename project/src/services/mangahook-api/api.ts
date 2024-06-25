import axios from 'axios';

export const api = axios.create({
  // baseURL: "https://aa3b-2804-56c-d7ce-8100-5c1a-d2b2-6547-bdc8.ngrok-free.app",
  baseURL: "http://localhost:3000",
});
