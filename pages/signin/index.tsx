import Form from '@/src/components/commons/Form/Form';

function Signin() {
  const validEmail = () => '';
  const validPassword = () => '';
  const inputForm = [
    { type: 'email', error: validEmail },
    { type: 'password', error: validPassword },
  ];
  return <Form page="signin" inputForm={inputForm} />;
}

export default Signin;
