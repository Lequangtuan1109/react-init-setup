// Cấu hình axios cơ bản

import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosConfig;
