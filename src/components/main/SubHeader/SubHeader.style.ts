import styled from 'styled-components';
import Image from 'next/image';
import COLOR from '@/styles/colors';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 70px;
  gap: 40px;
  background-color: ${COLOR.Gray0};
`;

export const Title = styled.div`
  display: block;
  width: 708px;
  height: 160px;
  font-weight: 700;
  font-size: 64px;
  line-height: 80px;
  text-align: center;

  @media (max-width: 1199px) {
    width: 472px;
    height: 240px;
  }

  @media (max-width: 767px) {
    width: 236px;
    height: 126px;
    font-size: 32px;
    line-height: 42px;
  }
`;

export const TitleHilight = styled.span`
  color: transparent;
  background-image: linear-gradient(90deg, ${COLOR.Primary}, #ff9f9f);
  -webkit-background-clip: text;
`;

export const button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  border-radius: 8px;
  padding: 16px 20px;
  font-weight: 600;
  font-size: 16px;
  line-height: 21.48px;
  color: #f5f5f5;
  background-image: linear-gradient(90deg, ${COLOR.Primary}, #6ae3fe);
  cursor: pointer;

  @media (max-width: 767px) {
    width: 200px;
    padding: 10px 16px;
    font-size: 14px;
    line-height: 16.71px;
  }
`;

export const SubHeaderImage = styled(Image)`
  width: 1200px;
  height: 590px;

  @media (max-width: 1199px) {
    width: 698px;
    height: 343px;
  }

  @media (max-width: 767px) {
    width: 325px;
    height: 160px;
  }
`;
