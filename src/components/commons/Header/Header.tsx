import React from 'react';
import Link from 'next/link';
import { UserDataType } from '@/src/type';
import * as S from './Header.style';

interface HeaderProps {
  fix?: boolean;
  userData: UserDataType;
}

const Header = ({ fix, userData }: HeaderProps) => (
  <S.Wrapper $fix={!!fix}>
    <S.HeaderWrapper>
      <Link href="/">
        <S.Logo
          src="/images/logo.svg"
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
        <div />
      )}
    </S.HeaderWrapper>
  </S.Wrapper>
);

Header.defaultProps = {
  fix: false,
};

export default Header;
