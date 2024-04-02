import { useState } from 'react';
import {
  FieldValues,
  UseFormRegister,
  UseFormGetValues,
  FieldErrors,
} from 'react-hook-form';
import * as S from './Input.style';

interface InputProps {
  type: string;
  Error?: (value: string, refValue: string) => string;
  Blur?: () => void;
  register: UseFormRegister<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
  refType?: string;
  errors: FieldErrors;
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
    error: '이메일을 입력해 주세요.',
  },
  password: {
    type: 'password',
    placeholder: '비밀번호를 입력해주세요.',
    label: '비밀번호',
    error: '비밀번호를 입력해주세요.',
  },
  password2: {
    type: 'password',
    placeholder: '영문, 숫자를 조합해 8자 이상 입력해주세요.',
    label: '비밀번호',
    error: '비밀번호를 입력해주세요.',
  },
  checkpassword: {
    type: 'password',
    placeholder: '비밀번호와 일치하는 값을 입력해주세요.',
    label: '비밀번호 확인',
    error: '비밀번호를 입력해주세요.',
  },
};

const Input = ({
  type,
  refType,
  Error,
  register,
  getValues,
  errors,
  Blur,
}: InputProps) => {
  const [inputType, setInputType] = useState(inputAtr[type].type ?? '');
  const [showPassword, setShowPassword] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const handleIconClick = () => {
    setShowPassword((prev) => !prev);
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  const handleFocus = () => {
    setIsFocus(true);
  };

  const validateInput = (value: string) => {
    if (Error) {
      const errorMessage = Error(String(value), getValues(refType ?? type));
      if (errorMessage === '') return true;
      return errorMessage;
    }
    return true;
  };
  const handleBlur = () => {
    setIsFocus(false);
    if (Blur) {
      Blur();
    }
  };
  const { onBlur, name, ref } = register(type, {
    required: inputAtr[type].error,
    validate: (value) => validateInput(value),
    onBlur: handleBlur,
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
          onBlur={onBlur}
          $error={String(errors[type]?.message ?? '')}
          onFocus={handleFocus}
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
      <S.ErrorText
        $error={String(
          errors[type]?.message && !isFocus ? errors[type]?.message : '',
        )}
      >
        {String(errors[type]?.message)}
      </S.ErrorText>
    </S.Wrapper>
  );
};

Input.defaultProps = {
  Error: () => '',
  Blur: () => {},
  refType: '',
};

export default Input;
