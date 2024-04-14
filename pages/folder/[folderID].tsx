import { useState, useCallback, useRef, useEffect } from 'react';
import Header from '@/src/components/commons/Header/Header';
import SearchBar from '@/src/components/commons/SearchBar/SearchBar';
import SubHeader from '@/src/components/folder/SubHeader/SubHeader';
import Footer from '@/src/components/commons/Footer/Footer';
import { getCategoryDataAPI, getCardDataAPI } from '@/src/apis/bootcampAPI';
import { FolderContextProvider } from '@/src/context/folderContext';
import {
  CategoryDataType,
  folderCardDataType,
  folderCardType,
} from '@/src/type';
import Folder from '@/src/components/folder/Folder/Folder';
import Modal from '@/src/components/folder/Modal/Modal';
import FilterData from '@/src/utils/FilterData';
import useAPIData from '@/src/hooks/useAPIData';
import { useRouter } from 'next/router';
import * as S from '../../styles/folder.style';

export default function FolderPage() {
  const { data: folderData } = useAPIData<CategoryDataType>(getCategoryDataAPI);
  const router = useRouter();
  const { folderID } = router.query;
  const { data: folderCard } = useAPIData<folderCardDataType>(
    getCardDataAPI,
    String(folderID),
  );
  const target = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [topic, setTopic] = useState<string>('');
  const cardData = FilterData<folderCardType>(folderCard?.card ?? [], topic);
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
        <Header fix={false} page="folder" />
        <SubHeader folderData={folderData ?? { category: [], error: null }} />
        <S.Content ref={target}>
          <S.ContentWrapper>
            <SearchBar topic={topic} changeTopic={changeTopic} />
            {topic && (
              <S.SearchText>
                <S.TopicText>{topic}</S.TopicText> 으로 검색한 결과입니다.
              </S.SearchText>
            )}
            <Folder
              folderData={folderData ?? { category: [], error: null }}
              cardData={cardData}
            />
          </S.ContentWrapper>
        </S.Content>
        {visible && (
          <SubHeader
            folderData={folderData ?? { category: [], error: null }}
            type="below"
          />
        )}
        <Footer />
        <Modal />
      </S.Wrapper>
    </FolderContextProvider>
  );
}
