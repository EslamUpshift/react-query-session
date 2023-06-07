import axios from 'axios';
const api = axios.create({
  baseURL: 'https://api.spacexdata.com/v4/',
  headers: {
    'Content-type': 'application/json',
    'Cache-Control': 'no-cache',
  },
});

export default api;
