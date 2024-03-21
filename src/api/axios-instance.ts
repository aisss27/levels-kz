import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://onelab-levels-api.vercel.app/api/',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    if (localStorage.getItem('token')) {
      config.headers['Authorization'] =
        `Bearer ${localStorage.getItem('token')}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
