import Input from '@/src/components/commons/Input/Input';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as S from './Form.style';

type inputType = {
  type: string;
  error?: (value: string) => string;
};

interface FormProps {
  page: 'signin' | 'signup';
  inputForm: inputType[];
}

const Form = ({ page, inputForm }: FormProps) => {
  const { getValues, register } = useForm();
  const subTitle = {
    signin: {
      href: '/signup',
      text: '회원이 아니신가요?',
      hrefText: '회원 가입하기',
    },
    signup: {
      href: '/signin',
      text: '이미 회원이신가요?',
      hrefText: '로그인 하기',
    },
  };
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
            {subTitle[page].text}
            <S.LinkTitle href={subTitle[page].href}>
              {subTitle[page].hrefText}
            </S.LinkTitle>
          </S.SubTitle>
        </S.TitleWrapper>
        {inputForm.map((input) => (
          <Input
            key={input.type}
            type={input.type}
            register={register}
            getValues={getValues}
            onError={input.error ? input.error : () => ''}
          />
        ))}
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
};

export default Form;
