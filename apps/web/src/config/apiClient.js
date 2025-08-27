import axios from 'axios';
import { getToken } from '../utils/auth.js';

const apiClient = axios.create({
  baseURL: 'http://localhost:8500',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  async config => {
    const token = await getToken();
    console.log('Request Token:', token);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

apiClient.interceptors.response.use(
  response => response,
  async error => {
    // console.log('API Error:', error.status);
    if (error.message === 'Network Error') {
      showToast('error', 'Network Error');
    }

    if (error.response?.status === 401) {
    }
    return Promise.reject(error);
  },
);

export default apiClient;
