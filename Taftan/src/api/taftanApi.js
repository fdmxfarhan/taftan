import axios from 'axios';

const taftanApi = axios.create({
  baseURL: 'https://api.taftan.com',
  timeout: 10000,
});


taftanApi.interceptors.request.use(
  async (config) => {
    const token = await getToken();
    config.headers['Authorization'] = `Bearer ${token}`;
    config.headers['App-Version'] = '1.0.0';
    config.headers['Accept-Language'] = 'fa';
    return config;
  },
  (error) => Promise.reject(error)
);

export default taftanApi;
