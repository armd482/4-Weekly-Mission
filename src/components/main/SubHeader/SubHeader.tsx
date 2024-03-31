import * as S from './SubHeader.style';

const SubHeader = () => (
  <S.Wrapper>
    <S.Title>
      <S.TitleHilight>세상의 모든 정보</S.TitleHilight>를 쉽게 저장하고
      관리해보세요
    </S.Title>
    <S.button>링크 추가하기</S.button>
    <S.SubHeaderImage
      src="/images/mainSubHeader.png"
      alt="subHeaderImage"
      width={1200}
      height={590}
      priority
    />
  </S.Wrapper>
);

export default SubHeader;
