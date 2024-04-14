import axios from 'axios';
import Cookies from 'js-cookie';
import { signinDataType } from '../type';

export const instance = axios.create({
  baseURL: 'https://bootcamp-api.codeit.kr/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authorizationInstance = axios.create({
  baseURL: 'https://bootcamp-api.codeit.kr/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

authorizationInstance.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get('accessToken');
    if (accessToken) {
      Object.assign(config.headers, { Authorization: `Bearer ${accessToken}` });
    }
    return config;
  },
  (error) => Promise.reject(error),
);

const getAccessToken = async (
  prevRefreshToken: string,
): Promise<signinDataType> => {
  const APIData = {
    accessToken: '',
    refreshToken: '',
    error: '',
  };
  try {
    const response = await instance.post('/refresh-token', {
      refresh_token: prevRefreshToken,
    });
    const {
      data: { accessToken, refreshToken },
    } = response.data;
    Object.assign(APIData, { accessToken, refreshToken });
    return APIData;
  } catch (error) {
    Object.assign(APIData, { error });
    return APIData;
  }
};

authorizationInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken) {
      const newAccessToken = await getAccessToken(refreshToken);
      if (!newAccessToken.error) {
        localStorage.setItem('accessToken', newAccessToken.accessToken);
        localStorage.setItem('refreshToken', newAccessToken.refreshToken);
        return instance(originalRequest);
      }
    }
    return Promise.reject(error);
  },
);
