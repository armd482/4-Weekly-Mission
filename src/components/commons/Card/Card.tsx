import { useRef, useState } from 'react';
import CardUpdateStatus from '@/src/utils/CardUpdateStatus';
import CardDateFormat from '@/src/utils/CardDateFormat';
import Link from 'next/link';
import { CategoryDataType, cardDataType } from '@/src/type';
import * as S from './Card.style';
import Kebab from '../Kebab/Kebab';

interface Props {
  page: string;
  card: cardDataType;
  folderData?: CategoryDataType;
}

const Card = ({ page, card, folderData }: Props) => {
  const WrapperRef = useRef<HTMLDivElement>(null);
  const ImageRef = useRef<HTMLImageElement>(null);
  const date = card?.createdAt ? card?.createdAt : '';
  const cardCreationDate = CardDateFormat(date);
  const cardStatus = CardUpdateStatus(date);
  const [imageURL, setImageURL] = useState(
    card?.imageSource && card.imageSource.startsWith('http')
      ? card?.imageSource
      : '/images/hollowImage.png',
  );

  const handleCardMouseOver = () => {
    if (WrapperRef.current && ImageRef.current) {
      WrapperRef.current.style.border = '2px solid #6D6AFE';
      ImageRef.current.style.transform = 'scale(1.3)';
    }
  };

  const handleCardMouseOut = () => {
    if (WrapperRef.current && ImageRef.current) {
      WrapperRef.current.style.border = '0';
      ImageRef.current.style.transform = 'scale(1)';
    }
  };

  const failImageLoad = () => {
    setImageURL('/images/hollowImage.png');
  };

  return (
    <Link href={card?.url ? card?.url : ''}>
      <S.Wrapper
        ref={WrapperRef}
        onMouseOver={handleCardMouseOver}
        onMouseOut={handleCardMouseOut}
      >
        <S.CardImageWrapper>
          <S.CardImage
            src={imageURL}
            alt="이미지"
            width={340}
            height={200}
            ref={ImageRef}
            onError={failImageLoad}
          />
        </S.CardImageWrapper>
        <S.CardContentWrapper>
          <S.TopWrapper>
            <S.CardStatus>{cardStatus}</S.CardStatus>
            {page === 'folder' && folderData && (
              <Kebab
                cardID={card.id}
                cardURL={card.url}
                folderData={folderData}
              />
            )}
          </S.TopWrapper>
          <S.CardTitle>{card?.description}</S.CardTitle>
          <S.CardDate>{cardCreationDate}</S.CardDate>
        </S.CardContentWrapper>
      </S.Wrapper>
    </Link>
  );
};

Card.defaultProps = {
  folderData: { category: [], error: null },
};
export default Card;
