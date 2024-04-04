import { useState, useCallback, useRef, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Header from '@/src/components/commons/Header/Header';
import SearchBar from '@/src/components/commons/SearchBar/SearchBar';
import SubHeader from '@/src/components/folder/SubHeader/SubHeader';
import Footer from '@/src/components/commons/Footer/Footer';
import {
  getCategoryDataAPI,
  getCardDataAPI,
  getUserSampleDataAPI,
} from '@/src/apis/bootcampAPI';
import { FolderContextProvider } from '@/src/context/folderContext';
import {
  CategoryDataType,
  folderCardDataType,
  folderCardType,
  UserDataType,
} from '@/src/type';
import Folder from '@/src/components/folder/Folder/Folder';
import Modal from '@/src/components/folder/Modal/Modal';
import FilterData from '@/src/utils/FilterData';
import * as S from '../../styles/folder.style';

interface pagePropsType {
  userData: UserDataType;
  folderData: CategoryDataType;
  folderCard: folderCardDataType;
}

interface FolderPageProps {
  pageProps: pagePropsType;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userData = await getUserSampleDataAPI();
  const folderData = await getCategoryDataAPI();
  const { folderID } = context.query;
  const folderCard = await getCardDataAPI(String(folderID ?? '0'));
  return {
    props: {
      userData,
      folderData,
      folderCard,
    },
  };
};

export default function FolderPage({ pageProps }: FolderPageProps) {
  const target = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [topic, setTopic] = useState<string>('');
  const cardData = FilterData<folderCardType>(pageProps.folderCard.card, topic);

  const changeTopic = useCallback((value: string) => {
    setTopic(value);
  }, []);

  useEffect(() => {
    const currrentTarget = target.current;
    const targetHeight = currrentTarget ? currrentTarget.scrollHeight : 0;
    const minThreshold = Math.min(window.innerHeight / targetHeight, 1);
    const options = {
      root: null,
      rootMargin: `0px 0px ${targetHeight}px 0px`,
      threshold: [minThreshold, 1],
    };
    const handleIntersectionObserver = (
      entries: IntersectionObserverEntry[],
    ) => {
      if (
        entries[0].intersectionRatio < 1 &&
        entries[0].intersectionRatio >= minThreshold
      ) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    const observer = new IntersectionObserver(
      handleIntersectionObserver,
      options,
    );
    if (currrentTarget) {
      observer.observe(currrentTarget);
    }
    return () => {
      if (currrentTarget) {
        observer.unobserve(currrentTarget);
      }
      observer.disconnect();
    };
  }, [cardData]);

  useEffect(() => {
    const { Kakao } = window;
    if (Kakao) {
      Kakao.cleanup();
      Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
    }
  }, []);

  return (
    <FolderContextProvider>
      <S.Wrapper>
        <Header fix={false} userData={pageProps.userData} page="folder" />
        <SubHeader folderData={pageProps.folderData} />
        <S.Content ref={target}>
          <S.ContentWrapper>
            <SearchBar topic={topic} changeTopic={changeTopic} />
            {topic && (
              <S.SearchText>
                <S.TopicText>{topic}</S.TopicText> 으로 검색한 결과입니다.
              </S.SearchText>
            )}
            <Folder folderData={pageProps.folderData} cardData={cardData} />
          </S.ContentWrapper>
        </S.Content>
        {visible && (
          <SubHeader folderData={pageProps.folderData} type="below" />
        )}
        <Footer />
        <Modal />
      </S.Wrapper>
    </FolderContextProvider>
  );
}
