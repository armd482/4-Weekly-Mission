import Form from '@/src/components/commons/Form/Form';

function Signup() {
  const validEmail = (value: string) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    if (!value) {
      return '이메일을 입력해 주세요.';
    }
    if (!regex.test(value)) {
      return '올바른 이베일 주소가 아닙니다';
    }
    /* check email overlapping */
    return '';
  };
  const validPassword = (value: string) => {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    if (!value) {
      return '비밀번호를 입력해주세요.';
    }
    if (!regex.test(value)) {
      return '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
    }
    return '';
  };
  const validCheckpassword = (value: string, refValue: string) => {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    if (!value) {
      return '비밀번호를 입력해주세요.';
    }
    if (!regex.test(value)) {
      return '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
    }
    if (value !== refValue) {
      return '비밀번호가  일치하지 않아요.';
    }
    return '';
  };
  const inputForm = [
    {
      type: 'email',
      error: validEmail,
      pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
    },
    {
      type: 'password2',
      error: validPassword,
      pattern: /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/,
    },
    {
      type: 'checkpassword',
      error: validCheckpassword,
      refType: 'password2',
      pattern: /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/,
    },
  ];
  return <Form page="signup" inputForm={inputForm} submit={() => {}} />;
}

export default Signup;
