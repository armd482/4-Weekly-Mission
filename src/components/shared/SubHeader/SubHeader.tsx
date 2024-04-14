import * as S from './SubHeader.style';

interface SubHeaderProps {
  folder: {
    userName: string;
    userImage: string;
    folderName: string;
  };
}

const SubHeader = ({ folder }: SubHeaderProps) => (
  <S.Wrapper>
    <S.ContentWrapper>
      <S.ProfileImage
        src={folder.userImage}
        alt="Avatar"
        width={60}
        height={60}
      />
      <S.ProfileName>{folder.userName}</S.ProfileName>
      <S.FolderName>{folder.folderName}</S.FolderName>
    </S.ContentWrapper>
  </S.Wrapper>
);

export default SubHeader;
