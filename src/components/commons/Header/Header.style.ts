import styled, { css } from 'styled-components';
import Image from 'next/image';
import FONT from '@/styles/font';
import COLOR from '@/styles/colors';

export const Wrapper = styled.div<{ $fix: boolean }>`
  background-color: #f0f6ff;
  z-index: 100;
  ${({ $fix }) =>
    $fix &&
    css`
      position: sticky;
      top: 0;
    `}
`;

export const HeaderWrapper = styled.div<{ $page: string }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ $page }) => ($page === 'main' ? '20px' : '33px')} 200px;

  @media (max-width: 1199px) {
    width: 800px;
    padding: ${({ $page }) => ($page === 'main' ? '20px' : '33px')} 0;
    margin: auto;
  }

  @media (max-width: 864px) {
    width: 100%;
    padding: 33px 32px;
  }
  @media (max-width: 767px) {
    padding: ${({ $page }) => ($page === 'main' ? '13px' : '18px')} 32px;
  }
`;

export const Logo = styled(Image)`
  width: 133px;
  height: 24px;

  @media (max-width: 767px) {
    width: 88.67px;
    height: 16px;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const UserImage = styled(Image)`
  width: 28px;
  height: 28px;
`;

export const UserEmail = styled.div`
  ${FONT.REGULAR_14};
  color: #373740;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const LoginButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 128px;
  border-radius: 8px;
  padding: 16px 20px;
  background-image: linear-gradient(90deg, ${COLOR.Primary}, #6ae3fe);
  font-weight: 600;
  font-size: 18px;
  line-height: 21.48px;
  color: #f5f5f5;
  cursor: pointer;

  @media (max-width: 767px) {
    width: 80px;
    padding: 10px 16px;
    font-size: 14px;
    line-height: 16.71px;
  }
`;
