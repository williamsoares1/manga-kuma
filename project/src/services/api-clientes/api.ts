import axios, { AxiosResponse } from 'axios';

const apiClientes = axios.create({
  baseURL: 'https://json-server.serveo.net',
});

export default apiClientes;