import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Cookies from 'js-cookie';
import { getUserDataAPI } from '../apis/bootcampAPI';

interface contextType {
  id: number;
  email: string;
  image: string;
  isPending: boolean;
  updateData: (id: number, email: string, image: string) => void;
}

export const UserContext = createContext<contextType>({
  id: -1,
  email: '',
  image: '',
  isPending: false,
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
    isPending: false,
  });

  const updateData = useCallback((id: number, email: string, image: string) => {
    setUserData({ id, email, image, isPending: false });
  }, []);
  const value = useMemo(
    () => ({
      id: userData.id,
      email: userData.email,
      image: userData.image,
      isPending: userData.isPending,
      updateData,
    }),
    [userData, updateData],
  );

  useEffect(() => {
    const getUserData = async () => {
      const accessToken = Cookies.get('accessToken');
      if (accessToken) {
        setUserData({ ...userData, isPending: true });
        const { id, email, image, error } = await getUserDataAPI();
        if (!error) {
          setUserData({ id: id ?? -1, email, image, isPending: false });
        }
      }
    };
    getUserData();
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
