import { signinAPI } from '@/src/apis/bootcampAPI';
import Form from '@/src/components/commons/Form/Form';
import { useForm } from 'react-hook-form';

function Signin() {
  const form = useForm({ mode: 'onBlur' });
  const inputForm = [
    {
      id: 'signinEmail',
      type: 'text',
      label: '이메일',
      placeholder: '이메일을 입력해주세요.',
      pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
      message: {
        empty: '이메일을 입력해주세요.',
        incorrect: '올바른 이메일 주소가 아닙니다.',
      },
    },
    {
      id: 'signinPassword',
      type: 'password',
      label: '비밀번호',
      placeholder: '비밀번호를 입력해 주세요.',
      message: {
        empty: '비밀번호를 입력해주세요.',
      },
    },
  ];

  const submitData = {
    APIFunc: signinAPI,
    dataName: {
      email: 'signinEmail',
      password: 'signinPassword',
    },
    errorMessages: [
      {
        name: 'signinEmail',
        message: '이메일을 확인해 주세요.',
      },
      {
        name: 'signinPassword',
        message: '비밀번호를 확인해 주세요.',
      },
    ],
  };

  return (
    <Form
      page="signin"
      inputForm={inputForm}
      submitData={submitData}
      form={form}
    />
  );
}

export default Signin;
