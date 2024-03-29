import { useContext, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { FolderContext } from '@/src/context/folderContext';
import { CategoryDataType } from '@/src/type';
import * as S from './Kebeb.style';

interface KebabProps {
  cardID: number;
  cardURL: string;
  folderData: CategoryDataType;
}

const Kebab = ({ cardID, cardURL, folderData }: KebabProps) => {
  const wraperRef = useRef<HTMLDivElement>(null);
  const { kebabID, changeKebabID, changeModalData } = useContext(FolderContext);
  const router = useRouter();
  const { folderID } = router.query;
  const currentFolderID = folderID ?? -1;

  const clickKebabButton = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    changeKebabID(cardID);
    e.preventDefault();
  };

  const openDeleteModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    changeModalData({
      modalType: 'DeleteLinkModal',
      subTitle: cardURL,
      folder: [],
      currentFolderID: -1,
      currentLinkID: -1,
    });
  };

  const openAddModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const folderCategory = folderData.category.map((category) => ({
      folderName: String(category.name),
      folderID: category.id,
      linkCount: category.link.count ?? 0,
    }));

    const folder = [
      { folderName: '전체', folderID: 0, linkCount: 3 },
      ...folderCategory,
    ];

    changeModalData({
      modalType: 'AddFolderModal',
      subTitle: cardURL,
      folder,
      currentFolderID: Number(currentFolderID),
      currentLinkID: -1,
    });
  };

  useEffect(() => {
    const clickOtherPart = (e: MouseEvent) => {
      const target = e.target as HTMLDivElement;
      if (wraperRef.current && !wraperRef.current.contains(target)) {
        changeKebabID(-1);
      }
    };
    document.addEventListener('click', clickOtherPart);
    return () => document.removeEventListener('click', clickOtherPart);
  }, [changeKebabID]);
  return (
    <S.Wrapper ref={wraperRef}>
      <S.KebabButton
        src="/images/kebab.svg"
        alt="kebab"
        width={21}
        height={17}
        onClick={clickKebabButton}
      />
      {kebabID === cardID && (
        <S.SelectWrapper>
          <S.SelectButton onClick={openDeleteModal}>삭제하기</S.SelectButton>
          <S.SelectButton onClick={openAddModal}>폴더에 추가</S.SelectButton>
        </S.SelectWrapper>
      )}
    </S.Wrapper>
  );
};

export default Kebab;
