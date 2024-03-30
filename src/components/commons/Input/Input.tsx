import { useState } from 'react';
import * as S from './input.style';

interface InputProps {
  type: string;
  value: string;
  changeValue: (value: string) => void;
  onBlur?: () => void;
  onError?: () => boolean;
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
    placeholder: '이메일을 입력해주세요',
    label: '이메일',
  },
  password: {
    type: 'password',
    placeholder: '비밀번호를 입력해주세요',
    label: '비밀번호',
  },
};

const Input = ({ type, value, changeValue, onBlur, onError }: InputProps) => {
  const [inputType, setInputType] = useState(inputAtr[type]?.type ?? '');
  const [showPassword, setShowPassword] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeValue(event.target.value);
  };

  const handleIconClick = () => {
    setShowPassword((prev) => !prev);
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  const handleFocusOut = () => {
    if (onError) {
      setIsError(onError());
    }
    if (onBlur) {
      onBlur();
    }
  };

  const handleFocusOn = () => {
    setIsError(false);
  };
  return (
    <>
      <S.Label>{inputAtr[type]?.label ?? ''}</S.Label>
      <S.InputWrapper>
        <S.InputBox
          value={value}
          placeholder={inputAtr[type]?.placeholder ?? ''}
          type={showPassword ? 'text' : type}
          onChange={handleInput}
          $isError={isError}
          onBlur={handleFocusOut}
          onFocus={handleFocusOn}
        />
        {type === 'password' && (
          <S.EyeButton
            src={`/images/eye-${showPassword ? 'on' : 'off'}.svg`}
            alt="눈 모양"
            onClick={handleIconClick}
            width={16}
            height={16}
            priority
          />
        )}
      </S.InputWrapper>
      <S.ErrorText $isError={isError}>
        {value ? '내용을 다시 작성해 주세요.' : '내용을 입력해주세요.'}
      </S.ErrorText>
    </>
  );
};

Input.defaultProps = {
  onBlur: () => {},
  onError: () => false,
};

export default Input;
