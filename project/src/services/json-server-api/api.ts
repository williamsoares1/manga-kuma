import axios from 'axios';

export const api = axios.create({
  baseURL: "https://eleven-bikes-fix.loca.lt",
});