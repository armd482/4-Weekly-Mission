import Footer from '@/src/components/commons/Footer/Footer';
import Header from '@/src/components/commons/Header/Header';
import Content from '@/src/components/main/Content/Content';
import SubHeader from '@/src/components/main/SubHeader/SubHeader';
import useLoginRouter from '@/src/hooks/useLoginRouter';

export default function Home() {
  useLoginRouter('/folder');
  return (
    <>
      <Header page="main" fix />
      <SubHeader />
      <Content />
      <Footer />
    </>
  );
}
