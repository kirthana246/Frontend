import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const shortenURL = (data: any) => API.post('/shorten', data);
export const fetchStats = () => API.get('/stats');