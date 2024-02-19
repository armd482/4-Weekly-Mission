import '../styles/CardList.css';
import Card from '../components/Card';

const CardList = ({ folderInfo, isIconVisible = false }) => {
  const cardList = isIconVisible ? folderInfo : folderInfo?.folder.links;

  return (
    <div className="cardlist">
      {cardList && cardList.length !== 0 ? (
        <>
          {cardList.map((card) => (
            <Card card={card} key={card.id} isIconVisible={isIconVisible} />
          ))}
        </>
      ) : (
        <div className='none-link'>저장된 링크가 없습니다.</div>
      )}
    </div>
  );
}

export default CardList;