import { UserProvider } from '@/src/context/userContext';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

declare global {
  interface Window {
    /* eslint-disable-next-line */
    Kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component pageProps={pageProps} />
    </UserProvider>
  );
}
