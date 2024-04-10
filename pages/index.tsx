import Footer from '@/src/components/commons/Footer/Footer';
import Header from '@/src/components/commons/Header/Header';
import Content from '@/src/components/main/Content/Content';
import SubHeader from '@/src/components/main/SubHeader/SubHeader';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    localStorage.clear();
  }, []);
  return (
    <>
      <Header page="main" fix />
      <SubHeader />
      <Content />
      <Footer />
    </>
  );
}
