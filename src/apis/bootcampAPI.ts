import { authorizationInstance, instance } from './instance';
import {
  UserDataType,
  CategoryDataType,
  folderCardDataType,
  signinDataType,
  FolderType,
} from '../type';

// shared
export const getFolderAPI = async (
  folderID: string | null,
): Promise<FolderType> => {
  const APIData = {
    userID: -1,
    folderName: '',
    error: null,
  };
  try {
    const response = await instance.get(`/folders/${folderID}`);
    const { name, user_id } = response.data.data[0];
    Object.assign(APIData, { folderName: name, userID: user_id });
    return APIData;
  } catch (error) {
    Object.assign(APIData, { error });
    return APIData;
  }
};
type userData = {
  name: string;
  image: string;
  error: null | unknown;
};
export const getFolderUserDataAPI = async (
  userID: string | null,
): Promise<userData> => {
  const APIData = {
    name: '',
    image: '',
    error: null,
  };
  try {
    const response = await instance.get(`/users/${userID}`);
    const { name, image_source } = response.data.data[0];
    Object.assign(APIData, { name, image: image_source });
    return APIData;
  } catch (error) {
    Object.assign(APIData, { error });
    return APIData;
  }
};

type cardDataType = {
  id: number;
  folder_id: number;
  created_at: string;
  url: string;
  title: string | null;
  description: string | null;
  image_source: string | null;
  updated_at: string | null;
};

export const getSharedCardDataAPI = async (
  userID: string,
  folderID: string,
) => {
  const APIData = {
    card: [],
    error: null,
  };
  try {
    const response = await instance.get(
      `/users/${userID}/links?folderId=${folderID}`,
    );
    const { data } = response.data;
    const typedData = data.map((card: cardDataType) => {
      const { id, created_at, url, title, description, image_source } = card;
      return {
        id,
        createdAt: created_at,
        imageSource: image_source,
        url,
        title,
        description,
      };
    });
    Object.assign(APIData, { card: typedData });
    return APIData;
  } catch (error) {
    Object.assign(APIData, { error });
    return APIData;
  }
};

export const getCategoryDataAPI = async (): Promise<CategoryDataType> => {
  const APIData: CategoryDataType = {
    category: [],
    error: null,
  };
  try {
    const response = await authorizationInstance.get('/folders');
    const { data } = response;
    APIData.category = data.data.folder;
    return APIData;
  } catch (error) {
    APIData.error = error;
    return APIData;
  }
};

export const getCardDataAPI = async (
  folderID: string | null = null,
): Promise<folderCardDataType> => {
  const APIData: folderCardDataType = {
    card: [],
    error: null,
  };
  try {
    const url = `/links${folderID === '0' || !folderID ? '' : `?folderId=${folderID}`}`;
    const response = await authorizationInstance.get(url);
    const { data } = response;
    APIData.card = data.data.folder;
    return APIData;
  } catch (error) {
    APIData.error = error;
    return APIData;
  }
};

export const signinAPI = async (email: string, password: string) => {
  const APIData: signinDataType = {
    accessToken: '',
    refreshToken: '',
    error: null,
  };
  try {
    const response = await instance.post('/sign-in', { email, password });
    const {
      data: {
        data: { accessToken, refreshToken },
      },
    } = response;
    APIData.accessToken = accessToken;
    APIData.refreshToken = refreshToken;
    return APIData;
  } catch (error) {
    APIData.error = error;
    return APIData;
  }
};

export const signupAPI = async (email: string, password: string) => {
  const APIData: signinDataType = {
    accessToken: '',
    refreshToken: '',
    error: null,
  };
  try {
    const response = await instance.post('/sign-up', { email, password });
    const {
      data: {
        data: { accessToken, refreshToken },
      },
    } = response;
    APIData.accessToken = accessToken;
    APIData.refreshToken = refreshToken;
    return APIData;
  } catch (error) {
    APIData.error = error;
    return APIData;
  }
};

export const checkEmailAPI = async (email: string) => {
  try {
    await instance.post('/check-email', { email });
    return true;
  } catch (error) {
    return false;
  }
};

export const getUserDataAPI = async () => {
  const APIData: UserDataType = {
    id: -1,
    email: '',
    image: '',
    error: null,
  };
  try {
    const response = await authorizationInstance.get('/users');
    const { id, email, image_source } = response.data.data[0];
    Object.assign(APIData, { id, email, image: image_source });
    return APIData;
  } catch (error) {
    Object.assign(APIData, { error });
    return APIData;
  }
};
