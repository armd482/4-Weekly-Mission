import { useState } from 'react';
import {
  FieldValues,
  UseFormRegister,
  UseFormGetValues,
} from 'react-hook-form';
import * as S from './Input.style';

interface InputProps {
  type: string;
  onBlur?: () => void;
  onError?: (value: string) => string;
  register: UseFormRegister<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
}

type InputType = {
  [key: string]: {
    type: string;
    placeholder: string;
    label: string;
    error: string;
  };
};

const inputAtr: InputType = {
  email: {
    type: 'text',
    placeholder: '이메일을 입력해주세요.',
    label: '이메일',
    error: '올바른 이메일 주소가 아닙니다',
  },
  password: {
    type: 'password',
    placeholder: '비밀번호를 입력해주세요.',
    label: '비밀번호',
    error: '',
  },
  password2: {
    type: 'password',
    placeholder: '영문, 숫자를 조합해 8자 이상 입력해주세요.',
    label: '비밀번호',
    error: '비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요',
  },
  checkpassword: {
    type: 'password',
    placeholder: '비밀번호와 일치하는 값을 입력해주세요.',
    label: '비밀번호 확인',
    error: '비밀번호가 일치하지 않아요',
  },
};

const Input = ({ type, onBlur, onError, register, getValues }: InputProps) => {
  const [inputType, setInputType] = useState(inputAtr[type].type ?? '');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const value = getValues(type);

  const handleIconClick = () => {
    setShowPassword((prev) => !prev);
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  const handleFocusOut = () => {
    if (onError) {
      const errorMessage = onError(value);
      setError(errorMessage);
    }
    if (onBlur) {
      onBlur();
    }
  };

  const handleFocusOn = () => {
    setError('');
  };
  return (
    <S.Wrapper>
      <S.Label>{inputAtr[type].label ?? ''}</S.Label>
      <S.InputWrapper>
        <S.InputBox
          placeholder={inputAtr[type].placeholder ?? ''}
          type={showPassword ? 'text' : inputAtr[type].type}
          $error={error}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register(type)}
          onBlur={handleFocusOut}
          onFocus={handleFocusOn}
        />
        {inputAtr[type].type === 'password' && (
          <S.EyeButton
            src={`/icons/eye-${showPassword ? 'on' : 'off'}.svg`}
            alt="눈 모양"
            onClick={handleIconClick}
            width={16}
            height={16}
            priority
          />
        )}
      </S.InputWrapper>
      <S.ErrorText $error={error}>{error}</S.ErrorText>
    </S.Wrapper>
  );
};

Input.defaultProps = {
  onBlur: () => {},
  onError: () => '',
};

export default Input;
