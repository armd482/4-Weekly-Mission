import Card from '../../components/Card';
import SearchBar from '../common/SearchBar';
import './ContentsArea.css';

const ContentsArea = ({ links, children }) => {
  return (
    <div className="contents_area">
      <SearchBar />
      {children}
      <div className="cards_area">
        {links?.length !== 0 ? (
          links?.map((link) => {
            return <Card link={link} key={link.id} />;
          })
        ) : (
          <p className="empty_links_text">저장된 링크가 없습니다</p>
        )}
      </div>
    </div>
  );
};

export default ContentsArea;