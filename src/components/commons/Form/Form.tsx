import Input from '@/src/components/commons/Input/Input';
import Image from 'next/image';
import Link from 'next/link';
import { SubmitHandler, FieldValues, UseFormReturn } from 'react-hook-form';
import { InputType, signinDataType } from '@/src/type';
import { useRouter } from 'next/router';
import useLoginRouter from '@/src/hooks/useLoginRouter';
import { useCallback, useState } from 'react';
import * as S from './Form.style';

type errorMessageType = {
  name: string;
  message: string;
};

type dataNameType = {
  email: string;
  password: string;
};

type submitDataType = {
  APIFunc: (email: string, password: string) => Promise<signinDataType>;
  dataName: dataNameType;
  errorMessages: errorMessageType[];
};

interface FormProps {
  page: 'signin' | 'signup';
  inputForm: InputType[];
  submitData: submitDataType;
  form: UseFormReturn;
}

const Form = ({ page, inputForm, submitData, form }: FormProps) => {
  useLoginRouter('/folder');
  const { handleSubmit, setError } = form;
  const [submit, setSubmit] = useState(false);
  const router = useRouter();
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

  const changeSubmit = useCallback((value: boolean) => {
    setSubmit(value);
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const [email, password] = [
      submitData.dataName.email,
      submitData.dataName.password,
    ];
    const APIData = await submitData.APIFunc(data[email], data[password]);
    if (APIData.error) {
      submitData.errorMessages.forEach((errorMessage) => {
        setError(errorMessage.name, {
          type: 'manual',
          message: errorMessage.message,
        });
      });
      setSubmit(true);
      return;
    }
    localStorage.setItem('accessToken', APIData.accessToken);
    localStorage.setItem('refreshToken', APIData.refreshToken);
    router.push('/folder');
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
            form={form}
            submit={submit}
            changeSubmit={changeSubmit}
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
