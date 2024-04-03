import { useRouter } from 'next/router';
import { useEffect } from 'react';

const useLoginRouter = (address: string) => {
  const router = useRouter();
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      router.push(address);
    }
  }, [address, router]);
};

export default useLoginRouter;
