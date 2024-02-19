import '../styles/CardList.css';
import Card from '../components/Card';

const CardList = ({ folderInfo, isIconVisible = true }) => {
  const cardList = folderInfo?.folder.links;

  return (
    <div className="cardlist">
      {cardList ? (
        <>
          {cardList.map((card) => (
            <Card card={card} key={card.id} isIconVisible={isIconVisible} />
          ))}
        </>
      ) : (
        <div>저장된 링크가 없습니다.</div>
      )}
    </div>
  );
}

export default CardList;