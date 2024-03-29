import Header from '@/src/components/commons/Header/Header';
import SubHeader from '@/src/components/shared/SubHeader/SubHeader';
import SearchBar from '@/src/components/commons/SearchBar/SearchBar';
import Card from '@/src/components/commons/Card/Card';
import Footer from '@/src/components/commons/Footer/Footer';
import { getFolderDataAPI, getUserSampleDataAPI } from '@/src/apis/bootcampAPI';
import { FolderDataType, UserDataType, cardDataType } from '@/src/type';
import { useCallback, useState } from 'react';
import FilterData from '@/src/utils/FilterData';
import * as S from '../../styles/shared.style';

interface pagePropsType {
  userData: UserDataType;
  folderData: FolderDataType;
}

interface SharedPageProps {
  pageProps: pagePropsType;
}

export const getServerSideProps = async () => {
  const userData = await getUserSampleDataAPI();
  const folderData = await getFolderDataAPI();
  return {
    props: {
      userData,
      folderData,
    },
  };
};

export default function SharedPage({ pageProps }: SharedPageProps) {
  const [topic, setTopic] = useState<string>('');
  const { cardData } = pageProps.folderData;
  const filteredData = FilterData<cardDataType>(cardData, topic);
  const folderData = { category: [], error: null };
  const changeTopic = useCallback((value: string) => {
    setTopic(value);
  }, []);
  return (
    <>
      <Header fix userData={pageProps.userData} />
      <SubHeader folder={pageProps.folderData} />
      <S.Content>
        <S.ContentWrapper>
          <SearchBar topic={topic} changeTopic={changeTopic} />
          {topic && (
            <S.SearchText>
              <S.TopicText>{topic}</S.TopicText> 으로 검색한 결과입니다.
            </S.SearchText>
          )}
          <S.CardWrapper>
            {filteredData.map((card) => (
              <Card
                key={card.id}
                card={card}
                page="shared"
                folderData={folderData}
              />
            ))}
          </S.CardWrapper>
        </S.ContentWrapper>
      </S.Content>
      <Footer />
    </>
  );
}
