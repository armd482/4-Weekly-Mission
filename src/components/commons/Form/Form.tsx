import Input from '@/src/components/commons/Input/Input';
import Image from 'next/image';
import Link from 'next/link';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { InputType } from '@/src/type';
import * as S from './Form.style';

interface FormProps {
  page: 'signin' | 'signup';
  inputForm: InputType[];
  submit: (data: FieldValues) => void;
}

const Form = ({ page, inputForm, submit }: FormProps) => {
  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });
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
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    submit(data);
  };
  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
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
            key={input.id}
            inputType={input}
            register={register}
            getValues={getValues}
            errors={errors}
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
