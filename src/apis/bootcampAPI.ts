import { authorizationInstance, instance } from './instance';
import {
  UserDataType,
  FolderDataType,
  CategoryDataType,
  folderCardDataType,
  signinDataType,
} from '../type';

export const getUserSampleDataAPI = async (): Promise<UserDataType> => {
  const APIData: UserDataType = {
    email: '',
    image: '',
    error: null,
  };
  try {
    const response = await instance.get(`/users/4`);
    const { data } = response;
    APIData.email = data.data[0].email;
    APIData.image = data.data[0].image_source;
    return APIData;
  } catch (error) {
    APIData.error = error;
    return APIData;
  }
};

export const getFolderDataAPI = async (): Promise<FolderDataType> => {
  const APIData: FolderDataType = {
    userName: '',
    userImage: '',
    name: '',
    cardData: [],
    error: null,
  };
  try {
    const response = await instance.get(`/sample/folder`);
    const { data } = response;
    APIData.userName = data.folder.owner.name;
    APIData.userImage = data.folder.owner.profileImageSource;
    APIData.name = data.folder.name;
    APIData.cardData = data.folder.links;
    return APIData;
  } catch (error) {
    APIData.error = error;
    return APIData;
  }
};

export const getCategoryDataAPI = async (): Promise<CategoryDataType> => {
  const APIData: CategoryDataType = {
    category: [],
    error: null,
  };
  try {
    const response = await instance.get('/users/4/folders');
    const { data } = response;
    APIData.category = data.data;
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
  if (folderID && folderID !== '0') {
    try {
      const response = await instance.get(
        `/users/4/links?folderId=${folderID}`,
      );
      const { data } = response;
      APIData.card = data.data;
      return APIData;
    } catch (error) {
      APIData.error = error;
      return APIData;
    }
  }
  try {
    const response = await instance.get('/users/4/links');
    const { data } = response;
    APIData.card = data.data;
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
    const {
      data: { id, email, image_source },
    } = response.data;
    Object.assign(APIData, { id, email, image: image_source });
    return APIData;
  } catch (error) {
    Object.assign(APIData, { error });
    return APIData;
  }
};
