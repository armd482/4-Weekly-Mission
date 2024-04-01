import Input from '@/src/components/commons/Input/input';
import * as S from '@/styles/signin.style';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useState } from 'react';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const changeEmail = useCallback((value: string) => {
    setEmail(value);
  }, []);

  const changePassword = useCallback((value: string) => {
    setPassword(value);
  }, []);

  const changeCheckPassword = useCallback((value: string) => {
    setCheckPassword(value);
  }, []);

  const SNS = [
    { alt: 'google', src: '/icons/google.png', href: 'https://www.google.com' },
    {
      alt: 'kakao',
      src: '/icons/kakao.svg',
      href: 'https://www.kakaocorp.com/page',
    },
  ];
  return (
    <S.Wrapper>
      <S.Form>
        <S.TitleWrapper>
          <Link href="/">
            <Image
              src="/icons/logo.svg"
              alt="logo"
              width={210}
              height={38}
              priority
            />
          </Link>
          <S.SubTitle>
            이미 회원이신가요?
            <S.LinkTitle href="/signin">로그인 하기</S.LinkTitle>
          </S.SubTitle>
        </S.TitleWrapper>
        <Input type="email" value={email} changeValue={changeEmail} />
        <Input type="password2" value={password} changeValue={changePassword} />
        <Input
          type="checkpassword"
          value={checkPassword}
          changeValue={changeCheckPassword}
        />
        <S.ButtonWraper>
          <S.SubmitButton>로그인</S.SubmitButton>
          <S.SocialWrapper>
            <S.SocialText>소셜 로그인</S.SocialText>
            <S.IconWrapper>
              {SNS.map((el) => (
                <Link key={el.alt} href={el.href}>
                  <S.SocialIcon
                    src={el.src}
                    alt={el.alt}
                    width={42}
                    height={42}
                  />
                </Link>
              ))}
            </S.IconWrapper>
          </S.SocialWrapper>
        </S.ButtonWraper>
      </S.Form>
    </S.Wrapper>
  );
}

export default Signin;
