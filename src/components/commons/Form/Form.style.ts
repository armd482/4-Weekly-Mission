import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import COLOR from '@/styles/colors';
import FONT from '@/styles/font';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLOR.Gray0};
`;

export const Form = styled.form`
  display: flex;
  width: 400px;
  flex-direction: column;
  justify-content: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 30px;
`;

export const Title = styled(Image)``;

export const SubTitle = styled.div`
  ${FONT.REGULAR_16};
`;

export const LinkTitle = styled(Link)`
  margin-left: 8px;
  font-weight: 16px;
  line-height: 19.09px;
  text-decoration: underline;
  color: ${COLOR.Primary};
`;

export const ButtonWraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
`;

export const SubmitButton = styled.div`
  width: 100%;
  border-radius: 8px;
  padding: 16px 20px;
  text-align: center;
  background-image: linear-gradient(90deg, ${COLOR.Primary}, #6ae3fe);
  font-weight: 600;
  font-size: 18px;
  line-height: 21.48px;
  color: #f5f5f5;
  cursor: pointer;
`;

export const SocialWrapper = styled.div`
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${COLOR.Gray2};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  background-color: ${COLOR.Gray1};
`;

export const SocialText = styled.div`
  ${FONT.REGULAR_14};
  color: #373740;
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const SocialIcon = styled(Image)`
  cursor: pointer;
`;
