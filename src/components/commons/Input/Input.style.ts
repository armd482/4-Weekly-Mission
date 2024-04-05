import Image from 'next/image';
import styled from 'styled-components';
import FONT from '@/styles/font';
import COLOR from '@/styles/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const InputWrapper = styled.div`
  position: relative;
  flex-direction: column;
  margin-top: 12px;
  width: 100%;
  height: 60px;
`;

export const Label = styled.label`
  ${FONT.REGULAR_14};
  color: #000000;
`;

export const InputBox = styled.input<{ $error: string }>`
  width: 100%;
  height: 100%;
  border: 1px solid ${({ $error }) => ($error === '' ? COLOR.Gray2 : COLOR.Red)};
  border-radius: 8px;
  padding: 18px 45px 18px 15px;
  outline: 0;

  ${({ type }) => type === 'password' && `letter-spacing: 6px`};

  &::placeholder {
    letter-spacing: initial;
  }

  &:focus {
    border-color: ${COLOR.Primary};
  }
`;
export const EyeButton = styled(Image)`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const ErrorText = styled.p<{ $error: string }>`
  visibility: ${({ $error }) => ($error !== '' ? 'visible' : 'hidden')};
  margin: 3px 0 9px 0;
  color: ${COLOR.Red};
  ${FONT.REGULAR_14};
`;