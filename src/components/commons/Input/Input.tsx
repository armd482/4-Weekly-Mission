import { useEffect, useRef, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { InputType } from '@/src/type';
import * as S from './Input.style';

interface InputProps {
  inputType: InputType;
  form: UseFormReturn;
  submit: boolean;
  changeSubmit: (value: boolean) => void;
}

const Input = ({ inputType, form, submit, changeSubmit }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>();
  const [showPassword, setShowPassword] = useState(false);
  const ID = inputType.id;
  const {
    getValues,
    register,
    formState: { errors },
    clearErrors,
  } = form;
  const handleIconClick = () => {
    setShowPassword((prev) => !prev);
  };

  const validateInput = (value: string) => {
    if (inputType.refID && value !== getValues(inputType.refID)) {
      return inputType.message?.inconsistent ?? true;
    }
    return true;
  };

  const handleBlur = () => {
    const blurFunc = inputType.onBlur;
    if (blurFunc) {
      blurFunc();
    }
  };

  const handleFocus = () => {
    clearErrors(ID);
  };

  const { onBlur, name, ref, onChange } = register(ID, {
    required: inputType.message?.empty ?? true,
    pattern: {
      value: inputType.pattern ?? /[\s\S]+/,
      message: inputType.message?.incorrect ?? '',
    },
    validate: (value) => validateInput(value),
    onBlur: handleBlur,
  });

  useEffect(() => {
    if (submit) {
      inputRef.current?.blur();
      changeSubmit(false);
    }
  }, [submit, changeSubmit]);

  return (
    <S.Wrapper>
      <S.Label>{inputType.label}</S.Label>
      <S.InputWrapper>
        <S.InputBox
          placeholder={inputType.placeholder ?? ''}
          type={showPassword ? 'text' : inputType.type}
          ref={(e) => {
            ref(e);
            inputRef.current = e ?? undefined;
          }}
          name={name}
          onBlur={onBlur}
          $error={String(errors[ID]?.message ?? '')}
          onFocus={handleFocus}
          onChange={onChange}
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
      <S.ErrorText $error={String(errors[ID]?.message ?? '')}>
        {String(errors[ID]?.message)}
      </S.ErrorText>
    </S.Wrapper>
  );
};

export default Input;
