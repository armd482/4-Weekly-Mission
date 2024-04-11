import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { UserContext } from '../context/userContext';

const useLoginRouter = (address: string) => {
  const router = useRouter();
  const { isPending, id } = useContext(UserContext);
  useEffect(() => {
    if (!isPending && id) {
      router.replace(address);
    }
  }, [id, isPending, address, router]);
};

export default useLoginRouter;
