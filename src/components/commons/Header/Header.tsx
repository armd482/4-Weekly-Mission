import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import * as S from './Header.style';

interface HeaderProps {
  fix?: boolean;
  page: string;
}

const Header = ({ fix, page }: HeaderProps) => {
  const [userData, setUserData] = useState({ id: -1, image: '', email: '' });
  useEffect(() => {
    const id = Number(localStorage.getItem('userID'));
    const image = localStorage.getItem('userImage');
    const email = localStorage.getItem('userEmail');
    if (id && email && image) {
      setUserData({ id, image, email });
    }
  }, []);

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
        {userData.id && userData.email && userData.image ? (
          <S.UserWrapper>
            <S.UserImage
              src={userData.image}
              alt="profile"
              width={28}
              height={28}
            />
            <S.UserEmail>{userData.email}</S.UserEmail>
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
