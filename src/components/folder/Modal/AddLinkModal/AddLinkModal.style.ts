import COLOR from '@/styles/colors';
import FONT from '@/styles/font';
import styled from 'styled-components';

const InputText = styled.input`
  width: 100%;
  border: 1px solid ${COLOR.Gray2};
  height: 60px;
  border-radius: 8px;
  padding: 18px 15px;
  ${FONT.REGULAR_16};
  color: ${COLOR.Gray3};
  outline: none;

  &:focus {
    border-color: ${COLOR.Primary};
  }
`;

export default InputText;
