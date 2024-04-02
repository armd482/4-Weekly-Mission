import Form from '@/src/components/commons/Form/Form';

function Signin() {
  const validEmail = (value: string) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    if (!value) {
      return '이메일을 입력해 주세요.';
    }
    if (!regex.test(value)) {
      return '올바른 이베일 주소가 아닙니다';
    }
    return '';
  };
  const validPassword = (value: string) => {
    if (!value) {
      return '비밀번호를 입력해 주세요.';
    }
    return '';
  };
  const inputForm = [
    {
      type: 'email',
      error: validEmail,
      pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
    },
    { type: 'password', error: validPassword },
  ];
  return <Form page="signin" inputForm={inputForm} submit={() => {}} />;
}

export default Signin;
