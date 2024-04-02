import { useState } from 'react';
import {
  FieldValues,
  UseFormRegister,
  UseFormGetValues,
} from 'react-hook-form';
import * as S from './Input.style';

interface InputProps {
  type: string;
  onBlur?: (value: string) => void;
  onError?: (value: string, refValue: string) => string;
  register: UseFormRegister<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
  refType?: string;
  pattern?: RegExp;
}

type InputType = {
  [key: string]: {
    type: string;
    placeholder: string;
    label: string;
  };
};

const inputAtr: InputType = {
  email: {
    type: 'text',
    placeholder: '이메일을 입력해주세요.',
    label: '이메일',
  },
  password: {
    type: 'password',
    placeholder: '비밀번호를 입력해주세요.',
    label: '비밀번호',
  },
  password2: {
    type: 'password',
    placeholder: '영문, 숫자를 조합해 8자 이상 입력해주세요.',
    label: '비밀번호',
  },
  checkpassword: {
    type: 'password',
    placeholder: '비밀번호와 일치하는 값을 입력해주세요.',
    label: '비밀번호 확인',
  },
};

const Input = ({
  type,
  refType,
  onBlur,
  onError,
  register,
  getValues,
  pattern,
}: InputProps) => {
  const [inputType, setInputType] = useState(inputAtr[type].type ?? '');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleIconClick = () => {
    setShowPassword((prev) => !prev);
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  const handleFocusOut = () => {
    if (onError) {
      const errorMessage = onError(getValues(type), getValues(refType ?? type));
      setError(errorMessage);
    }
    if (onBlur) {
      onBlur(getValues(type));
    }
  };

  const handleFocusOn = () => {
    setError('');
  };

  const validateInput = (value: string) => {
    if (!refType) {
      return true;
    }
    if (value === getValues(refType)) {
      return true;
    }

    return '비밀번호와 일치하지 않아요.';
  };

  const { onChange, name, ref } = register(type, {
    required: true,
    pattern: pattern ?? /.*/,
    validate: (value) => validateInput(value),
  });

  return (
    <S.Wrapper>
      <S.Label>{inputAtr[type].label ?? ''}</S.Label>
      <S.InputWrapper>
        <S.InputBox
          placeholder={inputAtr[type].placeholder ?? ''}
          type={showPassword ? 'text' : inputAtr[type].type}
          ref={ref}
          name={name}
          onChange={onChange}
          $error={error}
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
      <S.ErrorText $error={error}>{error || 'error'}</S.ErrorText>
    </S.Wrapper>
  );
};

Input.defaultProps = {
  onError: () => '',
  onBlur: () => {},
  refType: '',
  pattern: /.*/,
};

export default Input;
