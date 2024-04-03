import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://bootcamp-api.codeit.kr/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
