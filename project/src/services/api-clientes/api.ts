import axios, { AxiosResponse } from 'axios';

const apiClientes = axios.create({
  baseURL: 'http://localhost:3000',
});

export default apiClientes;