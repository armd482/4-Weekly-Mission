import { signupAPI } from '@/src/apis/bootcampAPI';
import Form from '@/src/components/commons/Form/Form';
import { useRouter } from 'next/router';
import { FieldValues } from 'react-hook-form';

function Signup() {
  const router = useRouter();
  const inputForm = [
    {
      id: 'signupEmail',
      type: 'text',
      label: '이메일',
      placeholder: '이메일을 입력해주세요.',
      pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
      message: {
        empty: '이메일을 입력해주세요.',
        incorrect: '올바른 이메일 주소가 아닙니다.',
      },
      onblur: () => {},
    },
    {
      id: 'signupPassword',
      type: 'password',
      label: '비밀번호',
      placeholder: '영문, 숫자를 조합해 8자 이상 입력해주세요',
      pattern: /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/,
      message: {
        empty: '비밀번호를 입력해주세요.',
        incorrect: '비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.',
      },
    },
    {
      id: 'signupConfirmPassword',
      type: 'password',
      label: '비밀번호 확인',
      placeholder: '영문, 숫자를 조합해 8자 이상 입력해주세요',
      pattern: /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/,
      refID: 'signupPassword',
      message: {
        empty: '비밀번호를 입력해주세요.',
        incorrect: '비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.',
        inconsistent: '비밀번호가 다릅니다',
      },
    },
  ];
  const setError = () => {};
  const submitFunction = async (data: FieldValues) => {
    const APIData = await signupAPI(data.signupEmail, data.signupPassword);
    if (APIData.error) {
      setError();
      return;
    }
    localStorage.setItem('accessToken', APIData.accessToken);
    localStorage.setItem('refreshToken', APIData.refreshToken);
    router.push('/folder');
  };
  return <Form page="signup" inputForm={inputForm} submit={submitFunction} />;
}

export default Signup;
