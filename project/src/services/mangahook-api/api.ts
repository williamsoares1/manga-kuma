import axios from 'axios';

export const api = axios.create({
  baseURL: "https://three-rivers-show.loca.lt",
});
