import classNames from 'classnames';
import PropTypes from 'prop-types';

import Facebook from 'assets/images/share-facebook.svg';
import Kakao from 'assets/images/share-kakao.svg';
import LinkCopy from 'assets/images/share-link-copy.svg';

import Button from 'components/Common/Button';
import ModalContainer from 'components/Modal/ModalContainer';
import styles from 'components/Modal/ShareModal.module.css';

import getHostAddress from 'utils/getHostAddress';

function ShareModal({ folder }) {
  const host = getHostAddress();
  const shareUrl = `${host}/shared/${folder?.id ?? ''}`;

  // 공유 옵션
  const shareList = [
    {
      key: 1,
      label: '카카오톡',
      type: 'kakao',
      src: Kakao,
      alt: 'kakao-icon',
    },
    {
      key: 2,
      label: '페이스북',
      type: 'facebook',
      src: Facebook,
      alt: 'facebook-icon',
    },
    {
      key: 3,
      label: '링크 복사',
      type: 'linkCopy',
      src: LinkCopy,
      alt: 'link-copy-icon',
    },
  ];

  // 공유 실행
  const handleShareButtonClick = (type) => {
    console.log(type);
    switch (type) {
      case 'kakao':
        window.open(`https://www.kakaotalk.com/share?url=${encodeURIComponent(shareUrl)}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`);
        break;
      case 'linkCopy':
        navigator.clipboard.writeText(shareUrl);
        break;
      default:
        break;
    }
  };

  const titleClasses = classNames(styles.title, 'text-color-gray100', 'text-center');
  const folderTitleClasses = classNames(styles['folder-title'], 'text-color-gray60', 'text-center');
  const shareButtonContainerClasses = classNames(styles['share-button-container'], 'flex-row', 'justify-center');
  const shareButtonClasses = classNames('border-none', 'background-none');
  const shareButtonImgClasses = classNames(styles['share-button-img']);
  const shareButtonLabelClasses = classNames(styles['share-button-label'], 'font-color-gray100');

  return (
    <ModalContainer>
      <p className={titleClasses}>폴더 공유</p>
      <p className={folderTitleClasses}>{folder?.title ?? '폴더명'}</p>
      <div className={shareButtonContainerClasses}>
        {shareList.map((share) => (
          <Button key={share.key} className={shareButtonClasses} onClick={() => handleShareButtonClick(share.type)}>
            <img className={shareButtonImgClasses} src={share.src} alt={share.alt} />
            <p className={shareButtonLabelClasses}>{share.label} </p>
          </Button>
        ))}
      </div>
    </ModalContainer>
  );
}

ShareModal.propTypes = {
  folder: PropTypes.shape({ id: PropTypes.number, title: PropTypes.string }),
};

ShareModal.defaultProps = {
  folder: { id: null, title: null },
};

export default ShareModal;
