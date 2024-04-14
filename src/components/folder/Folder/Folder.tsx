import { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FolderContext } from '@/src/context/folderContext';
import { CategoryDataType, folderCardType } from '@/src/type';
import * as S from './Folder.style';
import Card from '../../commons/Card/Card';

interface obj {
  src: string;
  text: string;
  click: (type: string) => void;
}

interface FolderProps {
  folderData: CategoryDataType;
  cardData: folderCardType[];
}

const Folder = ({ folderData, cardData }: FolderProps) => {
  const { changeModalData } = useContext(FolderContext);
  const router = useRouter();
  const { folderID } = router.query;
  const folderTitle = folderData.category.find(
    (folder) => String(folder.id) === folderID,
  )?.name;

  const openModal = () => {
    changeModalData({
      modalType: 'AddLinkModal',
      subTitle: '',
      folder: [],
      currentFolderID: -1,
      currentLinkID: -1,
    });
  };
  const optionModalType = (type: string) => {
    if (type === '공유') {
      return 'SharingModal';
    }
    if (type === '이름 변경') {
      return 'EditFolderModal';
    }
    if (type === '삭제') {
      return 'DeleteFolderModal';
    }
    return '';
  };
  const openOptionModal = (type: string) => {
    changeModalData({
      modalType: optionModalType(type),
      subTitle: type === '삭제' ? folderTitle ?? '' : '',
      folder: [],
      currentFolderID: -1,
      currentLinkID: -1,
    });
  };

  const OPTION: obj[] = [
    {
      src: '/icons/share.svg',
      text: '공유',
      click: openOptionModal,
    },
    {
      src: '/icons/pen.svg',
      text: '이름 변경',
      click: openOptionModal,
    },
    {
      src: '/icons/delete.svg',
      text: '삭제',
      click: openOptionModal,
    },
  ];
  if (folderData.category.length === 0) {
    return <S.HollowWrapper>저장된 링크가 없습니다</S.HollowWrapper>;
  }
  return (
    <S.Wrapper>
      <S.FolderWrapper>
        <S.CategoryWrapper>
          <Link href="/folder">
            <S.CategoryButton id="0" $checked={!folderID}>
              전체
            </S.CategoryButton>
          </Link>
          {folderData &&
            folderData.category.map((folder) => (
              <Link href={`/folder/${folder.id}`} key={folder.id}>
                <S.CategoryButton
                  id={String(folder.id)}
                  $checked={folderID === String(folder.id)}
                >
                  {folder.name}
                </S.CategoryButton>
              </Link>
            ))}
        </S.CategoryWrapper>
        <S.AddFolderWrapper>
          <S.AddFolderText onClick={openModal}>폴더 추가</S.AddFolderText>
          <S.AddFolderIcon
            src="/icons/add.svg"
            alt="추가"
            width={16}
            height={16}
          />
        </S.AddFolderWrapper>
      </S.FolderWrapper>
      <S.TitleWrapper>
        <S.FolderTitle>{folderTitle ?? '전체'}</S.FolderTitle>
        {folderID && String(folderID) !== '0' && (
          <S.OptionWrapper>
            {OPTION.map((option) => (
              <S.OptionButtonWrapper
                key={option.text}
                onClick={() => option.click(option.text)}
              >
                <S.OptionIcon
                  src={option.src}
                  alt={option.text}
                  width={18}
                  height={18}
                />
                <S.OptionText>{option.text}</S.OptionText>
              </S.OptionButtonWrapper>
            ))}
          </S.OptionWrapper>
        )}
      </S.TitleWrapper>
      <S.CardWrapper $empty={cardData.length === 0}>
        {cardData.map((card) => (
          <Card
            key={card.id}
            page="folder"
            card={{
              id: card.id,
              createdAt: card.created_at,
              url: card.url,
              title: card.title,
              description: card.description,
              imageSource: card.image_source,
            }}
            folderData={folderData}
          />
        ))}
      </S.CardWrapper>
    </S.Wrapper>
  );
};

export default Folder;
