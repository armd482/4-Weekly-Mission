import { FolderDataType } from '@/src/type';
import * as S from './SubHeader.style';

interface SubHeaderProps {
  folder: FolderDataType;
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
      <S.FolderName>{folder.name}</S.FolderName>
    </S.ContentWrapper>
  </S.Wrapper>
);

export default SubHeader;
