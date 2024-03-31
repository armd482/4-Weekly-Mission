import { useState } from 'react';
import * as S from './SearchBar.style';

interface SearchBarProps {
  topic?: string;
  changeTopic?: (value: string) => void;
}

const SearchBar = ({ topic, changeTopic }: SearchBarProps) => {
  const [link, setLink] = useState(topic);
  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (changeTopic) {
      changeTopic(e.target.value);
    }
    setLink(e.target.value);
  };

  const clickDeleteButton = () => {
    if (changeTopic) {
      changeTopic('');
    }
    setLink('');
  };
  return (
    <S.Wrapper>
      <S.SearchInput
        placeholder="링크를 검색해 보세요"
        onChange={changeInput}
        value={link}
      />
      <S.SearchIcon src="/icons/Search.svg" alt="검색" width={16} height={16} />
      {link && (
        <S.DeleteButton
          src="/icons/searchDelete.svg"
          alt="delete"
          width={24}
          height={24}
          onClick={clickDeleteButton}
        />
      )}
    </S.Wrapper>
  );
};

SearchBar.defaultProps = {
  topic: '',
  changeTopic: () => {},
};

export default SearchBar;
