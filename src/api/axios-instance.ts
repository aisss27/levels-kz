import axios from 'axios';

const authToken = localStorage.getItem('token');

export const instance = axios.create({
  baseURL: 'https://onelab-levels-api.vercel.app/api/',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    if (authToken) {
      config.headers['Authorization'] = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
