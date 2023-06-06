import axios from 'axios';
const api = axios.create({
  baseURL: 'https://api.spacexdata.com/v5/',
  headers: {
    'Content-type': 'application/json',
    'Cache-Control': 'no-cache',
  },
});

export default api;
