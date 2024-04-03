import { useState } from 'react';
import {
  FieldValues,
  UseFormRegister,
  UseFormGetValues,
  FieldErrors,
} from 'react-hook-form';
import { InputType } from '@/src/type';
import * as S from './Input.style';

interface InputProps {
  inputType: InputType;
  Blur?: () => void;
  register: UseFormRegister<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
  errors: FieldErrors;
}

const Input = ({
  inputType,
  register,
  getValues,
  errors,
  Blur,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const ID = inputType.id;

  const handleIconClick = () => {
    setShowPassword((prev) => !prev);
  };

  const handleFocus = () => {
    setIsFocus(true);
  };

  const validateInput = (value: string) => {
    if (inputType.refID && value !== getValues(inputType.refID)) {
      return inputType.message?.inconsistent ?? true;
    }
    return true;
  };
  const handleBlur = () => {
    setIsFocus(false);
    console.log(errors);
    if (Blur) {
      Blur();
    }
  };
  const { onBlur, name, ref } = register(ID, {
    required: inputType.message?.empty ?? true,
    pattern: {
      value: inputType.pattern ?? /[\s\S]+/,
      message: inputType.message?.incorrect ?? '',
    },
    validate: (value) => validateInput(value),
    onBlur: handleBlur,
  });

  return (
    <S.Wrapper>
      <S.Label>{inputType.label}</S.Label>
      <S.InputWrapper>
        <S.InputBox
          placeholder={inputType.placeholder ?? ''}
          type={showPassword ? 'text' : inputType.type}
          ref={ref}
          name={name}
          onBlur={onBlur}
          $error={String(errors[ID]?.message ?? '')}
          onFocus={handleFocus}
        />
        {inputType.type === 'password' && (
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
          errors[ID]?.message && !isFocus ? errors[ID]?.message : '',
        )}
      >
        {String(errors[ID]?.message)}
      </S.ErrorText>
    </S.Wrapper>
  );
};

Input.defaultProps = {
  Blur: () => {},
};

export default Input;
