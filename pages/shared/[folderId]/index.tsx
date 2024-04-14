import { useCallback, useState } from 'react';
import Header from '@/src/components/commons/Header/Header';
import SubHeader from '@/src/components/shared/SubHeader/SubHeader';
import SearchBar from '@/src/components/commons/SearchBar/SearchBar';
import Card from '@/src/components/commons/Card/Card';
import Footer from '@/src/components/commons/Footer/Footer';
import { FolderType, cardDataType } from '@/src/type';
import FilterData from '@/src/utils/FilterData';
import {
  getFolderAPI,
  getFolderUserDataAPI,
  getSharedCardDataAPI,
} from '@/src/apis/bootcampAPI';
import { useRouter } from 'next/router';
import useAPIData from '@/src/hooks/useAPIData';
import * as S from '../../../styles/shared.style';

type userDataType = {
  name: string;
  image: string;
};

export default function SharedPage() {
  const router = useRouter();
  const { folderId } = router.query;
  const { data: folderData } = useAPIData<FolderType>(
    getFolderAPI,
    String(folderId ?? ''),
  );
  const userID = folderData?.userID;
  const { data: userData } = useAPIData<userDataType>(
    getFolderUserDataAPI,
    String(userID),
  );
  const { data: cardData } = useAPIData(
    getSharedCardDataAPI,
    String(userID),
    String(folderId),
  );
  const [topic, setTopic] = useState<string>('');
  const folder = {
    userName: userData?.name ?? '',
    userImage: userData?.image ?? '',
    folderName: folderData?.folderName ?? '',
  };
  const filteredData = FilterData<cardDataType>(cardData?.card ?? [], topic);
  const changeTopic = useCallback((value: string) => {
    setTopic(value);
  }, []);
  return (
    <>
      <Header fix page="shared" />
      <SubHeader folder={folder} />
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
              <Card key={card.id} card={card} page="shared" />
            ))}
          </S.CardWrapper>
        </S.ContentWrapper>
      </S.Content>
      <Footer />
    </>
  );
}
