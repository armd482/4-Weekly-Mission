import * as S from './Content.style';

const Content = () => {
  const CONTENT = [
    {
      title1: '',
      title2: '를 저장하세요',
      highlightedTitle: '원하는 링크',
      subTitle:
        '나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고 싶은 모든 것을 한 공간에 저장하세요.',
      image: '/images/mainContent1.png',
      color1: '#fe8a8a',
      color2: '#a4ceff',
    },
    {
      title1: '링크를 폴더로',
      title2: '하세요',
      highlightedTitle: '관리',
      subTitle: '나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.',
      image: '/images/mainContent2.png',
      color1: '#6fbaff',
      color2: '#ffd88b',
    },
    {
      title1: '저장한 링크를',
      title2: '해 보세요',
      highlightedTitle: '공유',
      subTitle:
        '여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게 쉽고 빠르게 링크를 공유해 보세요.',
      image: '/images/mainContent3.png',
      color1: '#6d7ccd',
      color2: '#528885',
    },
    {
      title1: '저장한 링크를',
      title2: '해 보세요',
      highlightedTitle: '검색',
      subTitle: '중요한 정보들을 검색으로 쉽게 찾아보세요.',
      image: '/images/mainContent4.png',
      color1: '#fe578f',
      color2: '#68e8f9',
    },
  ];
  return (
    <S.Wrapper>
      {CONTENT.map((content) => (
        <S.ContentWrapper key={content.image}>
          <S.Title>
            {content.title1}
            <S.HiglightTitle $color1={content.color1} $color2={content.color2}>
              {content.highlightedTitle}
            </S.HiglightTitle>
            {content.title2}
          </S.Title>
          <S.SubTitle>{content.subTitle}</S.SubTitle>
          <S.ContentImage
            src={content.image}
            alt="이미지"
            width={550}
            height={450}
            priority
          />
        </S.ContentWrapper>
      ))}
    </S.Wrapper>
  );
};

export default Content;
