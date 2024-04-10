export type UserDataType = {
  id?: number;
  email: string;
  image: string | null;
  error: unknown | null;
};

export type currentFolderDataType = {
  title: string;
  id: string;
};

export type modalFolderDataType = {
  folderName: string;
  folderID: number;
  linkCount: number;
};

export type modalDataType = {
  modalType: string;
  subTitle: string;
  folder: modalFolderDataType[];
  currentFolderID: number;
  currentLinkID: number;
};

export type cardDataType = {
  id: number;
  createdAt: string;
  url: string;
  title: string | null;
  description: string | null;
  imageSource: string | null;
};

export type FolderDataType = {
  userName: string;
  userImage: string;
  name: string;
  cardData: cardDataType[];
  error: unknown | null;
};

type link = {
  count: number;
};

type categoryType = {
  id: number;
  createdAt: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link: link;
};

export type CategoryDataType = {
  category: categoryType[];
  error: unknown | null;
};

export type folderCardType = {
  id: number;
  created_at: string;
  updated_at: string;
  url: string;
  title: string;
  description: string | null;
  image_source: string | null;
  forder_id: number;
};
export type folderCardDataType = {
  card: folderCardType[];
  error: null | unknown;
};
type errorMessage = {
  empty?: string;
  incorrect?: string;
  inconsistent?: string;
};
export type InputType = {
  id: string;
  type: string;
  label: string;
  placeholder?: string;
  pattern?: RegExp;
  message?: errorMessage;
  refID?: string;
  onBlur?: () => void;
};
export type signinDataType = {
  accessToken: string;
  refreshToken: string;
  error: null | unknown;
};
