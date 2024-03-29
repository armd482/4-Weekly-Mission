import { createContext, useCallback, useMemo, useState } from 'react';
import { modalDataType } from '../type';

interface contextType {
  kebabID: number;
  changeKebabID: (value: number) => void;
  modalData: modalDataType;
  changeModalData: (value: modalDataType) => void;
}

const DEFAULT_MODAL = {
  modalType: '',
  subTitle: '',
  folder: [],
  currentFolderID: -1,
  currentLinkID: -1,
};

const defaultValue = {
  kebabID: -1,
  changeKebabID: () => {},
  modalData: DEFAULT_MODAL,
  changeModalData: () => {},
};

interface FolderContextProviderProps {
  children: React.ReactNode;
}

export const FolderContext = createContext<contextType>(defaultValue);

export const FolderContextProvider = ({
  children,
}: FolderContextProviderProps) => {
  const [kebabID, setKebabID] = useState<number>(-1);
  const [modalData, setModalData] = useState<modalDataType>(DEFAULT_MODAL);
  const changeKebabID = useCallback((value: number) => {
    setKebabID(value);
  }, []);
  const changeModalData = useCallback((value: modalDataType) => {
    setModalData(value);
  }, []);

  const value = useMemo(
    () => ({ kebabID, changeKebabID, modalData, changeModalData }),
    [kebabID, changeKebabID, modalData, changeModalData],
  );
  return (
    <FolderContext.Provider value={value}>{children}</FolderContext.Provider>
  );
};
