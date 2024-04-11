import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { getUserDataAPI } from '../apis/bootcampAPI';

interface contextType {
  id: number;
  email: string;
  image: string;
  updateData: (id: number, email: string, image: string) => void;
}

export const UserContext = createContext<contextType>({
  id: -1,
  email: '',
  image: '',
  updateData: () => {},
});

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [userData, setUserData] = useState({
    id: -1,
    email: '',
    image: '',
  });

  const updateData = useCallback((id: number, email: string, image: string) => {
    setUserData({ id, email, image });
  }, []);
  const value = useMemo(
    () => ({
      id: userData.id,
      email: userData.email,
      image: userData.image,
      updateData,
    }),
    [userData, updateData],
  );

  const getUserData = async () => {
    const { id, email, image, error } = await getUserDataAPI();
    if (!error) {
      setUserData({ id: id ?? -1, email, image });
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
