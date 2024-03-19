import { useRef } from 'react';
import CardUpdateStatus from '@/src/utils/CardUpdateStatus';
import CardDateFormat from '@/src/utils/CardDateFormat';
import Link from 'next/link';
import {
  CardContentWrapper,
  CardImageWrapper,
  CardDate,
  CardImage,
  CardStatus,
  CardTitle,
  Wrapper,
} from './Card.style';

interface cardData {
  id: number | undefined;
  createdAt: string | undefined;
  url: string | undefined;
  title: string | undefined;
  description: string | undefined;
  imageSource: string | undefined;
}

interface Props {
  card: null | cardData;
}

const Card = ({ card }: Props) => {
  const WrapperRef = useRef<HTMLDivElement>(null);
  const ImageRef = useRef<HTMLImageElement>(null);

  const date = card?.createdAt ? card?.createdAt : '';
  const cardCreationDate = CardDateFormat(date);
  const cardStatus = CardUpdateStatus(date);

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

  return (
    <Link href={card?.url ? card?.url : ''}>
      <Wrapper
        ref={WrapperRef}
        onMouseOver={handleCardMouseOver}
        onMouseOut={handleCardMouseOut}
      >
        <CardImageWrapper>
          <CardImage
            src={
              card?.imageSource ? card?.imageSource : '/images/hollowImage.png'
            }
            alt="이미지"
            width={340}
            height={200}
            ref={ImageRef}
          />
        </CardImageWrapper>
        <CardContentWrapper>
          <CardStatus>{cardStatus}</CardStatus>
          <CardTitle>{card?.description}</CardTitle>
          <CardDate>{cardCreationDate}</CardDate>
        </CardContentWrapper>
      </Wrapper>
    </Link>
  );
};

export default Card;
