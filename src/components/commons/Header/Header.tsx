import React from 'react';
import Link from 'next/link';
import { UserDataType } from '@/src/type';
import * as S from './Header.style';

interface HeaderProps {
  fix?: boolean;
  userData?: UserDataType;
  page: string;
}

const Header = ({ fix, userData, page }: HeaderProps) => (
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
      {userData ? (
        <S.UserWrapper>
          <S.UserImage
            src={userData.image ?? ''}
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

Header.defaultProps = {
  fix: false,
  userData: null,
};

export default Header;
