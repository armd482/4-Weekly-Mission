import styled from 'styled-components';
import LinkImage from './LinkImage';
import LinkInfo from './LinkInfo';

const LinkItem = styled.li`
  width: calc(100% / 3 - 4rem / 3);
  border-radius: 1.5rem;
  box-shadow: 0 0.5rem 2.5rem 0 rgba(0, 0, 0, 0.08);

  @media (max-width: 1199px) {
    width: calc(50% - 1rem);
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const LinkCard = ({ url, createdAt, desc, imgUrl, handleModalBtnClick, changeSelectedLink }) => {
  const handleSelectedLink = () => {
    changeSelectedLink(url);
  };

  return (
    <LinkItem>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <LinkImage image={imgUrl} />
        <LinkInfo
          createdAt={createdAt}
          desc={desc}
          handleModalBtnClick={handleModalBtnClick}
          handleSelectedLink={handleSelectedLink}
        />
      </a>
    </LinkItem>
  );
};

export default LinkCard;
