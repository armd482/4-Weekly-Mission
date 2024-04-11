import React, { useContext } from 'react';
import Link from 'next/link';
import { UserContext } from '@/src/context/userContext';
import * as S from './Header.style';

interface HeaderProps {
  fix?: boolean;
  page: string;
}

const Header = ({ fix, page }: HeaderProps) => {
  const { id, email, image } = useContext(UserContext);

  return (
    <S.Wrapper $fix={!!fix}>
      <S.HeaderWrapper $page={page}>
        <Link href="/">
          <S.Logo
            src="/icons/logo.svg"
            alt="Linkbrary"
            width={133}
            height={24}
            priority
          />
        </Link>
        {id && email && image ? (
          <S.UserWrapper>
            <S.UserImage src={image} alt="profile" width={28} height={28} />
            <S.UserEmail>{email}</S.UserEmail>
          </S.UserWrapper>
        ) : (
          <Link href="/signin">
            <S.LoginButton>로그인</S.LoginButton>
          </Link>
        )}
      </S.HeaderWrapper>
    </S.Wrapper>
  );
};

Header.defaultProps = {
  fix: false,
};

export default Header;
