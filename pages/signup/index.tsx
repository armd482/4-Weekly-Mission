import Form from '@/src/components/commons/Form/Form';

function Signup() {
  const validEmail = () => '';
  const validPassword = () => '';
  const validCheckpassword = () => '';
  const inputForm = [
    { type: 'email', error: validEmail },
    { type: 'password2', error: validPassword },
    { type: 'checkpassword', error: validCheckpassword },
  ];
  return <Form page="signup" inputForm={inputForm} />;
}

export default Signup;
