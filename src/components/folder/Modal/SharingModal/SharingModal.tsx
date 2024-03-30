import { useContext } from 'react';
import { FolderContext } from '@/src/context/folderContext';
import * as S from './SharingModal.style';

const SharingModal = () => {
  const { changeModalData } = useContext(FolderContext);

  const deleteModal = () => {
    changeModalData({
      modalType: '',
      subTitle: '',
      folder: [],
      currentFolderID: -1,
      currentLinkID: -1,
    });
  };
  const shareKakao = () => {
    const { Kakao, location } = window;
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'Linkbrary',
        description: '세상의 모든 정보를 쉽게 저장하고 관리해 보세요',
        imageUrl:
          'https://s3-alpha-sig.figma.com/img/857e/092f/86faf2c5a590aad01435db3ce63a6664?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h-Mmk4pr286-1hogF3C86~RvXj-Qdms4PKWdTsTEOkWcJcvLBYaTd~Z5ZJJHg~B1nT7w3PjrTnhP~pCmhSpKzhim1Fm2po1RB5kGRAXYHxZNRGLWuLOw-TCBHEH2HmyoXMwPo-plAmBAzS4zd8Sp9zbTGbuWVaoX9ogux5RDHVofYsU~RWJwl4r-P-fnf5lS85MiaEpLnn2GkGLOY1WXHipCxjsiamDFp0QILkAh0sLrLpYBqhMP3ap~O-BUG4fJsY6EsGn7NiJxBsMbq7Mx2NXhRpga9P2rfw7vTIPTrTxbsUCwVr4jcfwPRAkCnHhzvD0B7VQYUBTNYRVZoYqiXg__',
        link: {
          webUrl: location.href,
        },
      },
    });
  };

  const shareFaceBook = () => {
    const { location } = window;
    window.open(`http://www.facebook.com/sharer.php?u=${location.href}`);
  };

  const copyURL = async () => {
    await navigator.clipboard.writeText(window.location.href);
    alert('클립보드에 복사되었습니다');
  };

  const BUTTON = [
    {
      name: '카카오톡',
      src: '/images/kakaoShare.svg',
      color: '#FEE500',
      onclick: () => shareKakao(),
    },
    {
      name: '페이스북',
      src: '/images/facebookShare.svg',
      color: '#1877F2',
      onclick: () => shareFaceBook(),
    },
    {
      name: '링크 복사',
      src: '/images/link.svg',
      color: 'rgba(157, 157, 157, 0.04)',
      onclick: () => copyURL(),
    },
  ];

  return (
    <S.Wrapper>
      {BUTTON.map((button) => (
        <S.ButtonWrapper key={button.name}>
          <S.IconWrapper
            $color={button.color}
            onClick={() => {
              button.onclick();
              deleteModal();
            }}
          >
            <S.Icon src={button.src} alt={button.name} width={18} height={18} />
          </S.IconWrapper>
          <S.IconName>{button.name}</S.IconName>
        </S.ButtonWrapper>
      ))}
    </S.Wrapper>
  );
};

export default SharingModal;
