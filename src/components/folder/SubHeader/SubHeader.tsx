import { ChangeEvent, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { FolderContext } from '@/src/context/folderContext';
import { CategoryDataType } from '@/src/type';
import * as S from './SubHeader.style';

interface SubHeaderProps {
  folderData: CategoryDataType;
  type?: string;
}

const SubHeader = ({ folderData, type }: SubHeaderProps) => {
  const { changeModalData } = useContext(FolderContext);
  const [link, setLink] = useState<string>('');
  const router = useRouter();
  const { folderID } = router.query;

  const folderCategory = folderData?.category?.map((category) => ({
    folderName: String(category.name),
    folderID: Number(category.id),
    linkCount: category.link ? category.link.count : 0,
  }));

  const folder = [
    { folderName: '전체', folderID: 0, linkCount: 3 },
    ...folderCategory,
  ];
  const changeLink = (e: ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  };
  const openModal = () => {
    changeModalData({
      modalType: 'AddFolderModal',
      subTitle: link ? `https://${link}` : '',
      folder,
      currentFolderID: Number(folderID),
      currentLinkID: -1,
    });
  };

  return (
    <S.Wrapper $type={type ?? ''}>
      <S.SearchWrapper>
        <S.SearchInput
          placeholder="링크를 추가해보세요"
          onChange={changeLink}
        />
        <S.ImageIcon src="/icons/link.svg" alt="링크" width={20} height={20} />
        <S.AddButton onClick={openModal}>추가하기</S.AddButton>
      </S.SearchWrapper>
    </S.Wrapper>
  );
};

SubHeader.defaultProps = {
  type: '',
};

export default SubHeader;
