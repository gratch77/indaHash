import axios, { CreateAxiosDefaults } from 'axios';

const createConfig = {
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
};

const apiClient = axios.create(createConfig as CreateAxiosDefaults);

apiClient.interceptors.request.use((config) => {
  if (['post', 'put', 'delete'].includes(config.method || '')) {
    const apiKey = import.meta.env.VITE_API_KEY;
    const newConfig = { ...config };
    newConfig.headers['X-API-KEY'] = apiKey;
    return newConfig;
  }
  return config;
}, (error) => Promise.reject(error));

export default apiClient;
