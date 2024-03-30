import '@/styles/globals.css';
import type { AppProps } from 'next/app';

declare global {
  interface Window {
    /* eslint-disable-next-line */
    Kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component pageProps={pageProps} />;
}
