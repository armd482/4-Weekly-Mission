export type UserDataType = {
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
  modalType: string | null;
  subTitle: string | null;
  folder: modalFolderDataType[] | null;
  currentFolderID: number | null;
  currentLinkID: number | null;
};

export type cardDataType = {
  id: number;
  createdAt: string | null;
  url: string | null;
  title: string | null;
  description: string | null;
  imageSource: string | null;
};

export type FolderDataType = {
  userName: string;
  userImage: string | null;
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
  name: string | null;
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
  url: string | null;
  title: string;
  description: string | null;
  image_source: string | null;
  forder_id: number;
};
export type folderCardDataType = {
  card: folderCardType[];
  error: null | unknown;
};
