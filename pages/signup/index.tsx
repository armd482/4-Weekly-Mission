import { useForm } from 'react-hook-form';
import { checkEmailAPI, signupAPI } from '@/src/apis/bootcampAPI';
import Form from '@/src/components/commons/Form/Form';

function Signup() {
  const form = useForm({ mode: 'onBlur', reValidateMode: 'onBlur' });
  const { getValues, setError } = form;

  const emailCheck = async () => {
    const value = getValues('signupEmail');
    const regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

    if (!regExp.test(value)) {
      return;
    }
    const flag = await checkEmailAPI(value);
    if (!flag) {
      setError('signupEmail', {
        type: 'custom',
        message: '이미 사용중인 이메일입니다.',
      });
    }
  };

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
      onBlur: emailCheck,
    },
    {
      id: 'signupPassword',
      type: 'password',
      label: '비밀번호',
      placeholder: '영문, 숫자를 조합해 8자 이상 입력해주세요.',
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
      placeholder: '비밀번호와 일치하는 값을 입력해주세요.',
      pattern: /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/,
      refID: 'signupPassword',
      message: {
        empty: '비밀번호를 입력해주세요.',
        incorrect: '비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.',
        inconsistent: '비밀번호가 일치하지 않아요.',
      },
    },
  ];
  const submitData = {
    APIFunc: signupAPI,
    dataName: {
      email: 'signupEmail',
      password: 'signupPassword',
    },
    errorMessages: [
      {
        name: 'signupEmail',
        message: '이메일을 확인해 주세요.',
      },
      {
        name: 'signupPassword',
        message: '비밀번호를 확인해 주세요.',
      },
      {
        name: 'signupConfirmPassword',
        message: '비밀번호를 확인해 주세요.',
      },
    ],
  };
  return (
    <Form
      page="signup"
      inputForm={inputForm}
      submitData={submitData}
      form={form}
    />
  );
}

export default Signup;
