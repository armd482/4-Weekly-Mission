import styled from 'styled-components';
import Image from 'next/image';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  display: grid;
  column-gap: 157px;
  padding: 50px 0;
  width: 998px;

  &:nth-of-type(even) {
    grid-template:
      'image .'
      'image title'
      'image subtitle'
      'image .'
      /550px 291px;
  }

  &:nth-of-type(odd) {
    grid-template:
      '. image'
      'title image'
      'subtitle image'
      '. image'
      / 291px 550px;
  }
  @media (max-width: 1199px) {
    width: 698px;
    column-gap: 51px;

    &:nth-of-type(even) {
      grid-template:
        'image .'
        'image title'
        'image subtitle'
        'image .'
        /385px 262px;
    }

    section:nth-of-type(odd) {
      grid-template:
        '. image'
        'title image'
        'subtitle image'
        '. image'
        /262px 385px;
    }
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    padding: 40px 32px;
    width: 100%;
    gap: 20px;
  }
`;

export const Title = styled.div`
  grid-area: title;
  width: 262px;
  height: fit-content;
  font-weight: 700;
  font-size: 48px;
  line-height: 57.6px;
  letter-spacing: -0.3px;
  color: #000000;
  @media (max-width: 767px) {
    font-size: 24px;
    line-height: 28.64px;
    text-align: left;
    order: 1;
  }
`;

export const SubTitle = styled.div`
  grid-area: subtitle;
  width: 262px;
  height: fit-content;
  margin-top: 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #6b6b6b;
  word-break: keep-all;
  @media (max-width: 767px) {
    font-size: 15px;
    line-height: 22.5px;
    text-align: left;
    order: 3;
  }
`;

interface ColorProps {
  $color1: string;
  $color2: string;
}

export const HiglightTitle = styled.span<ColorProps>`
  color: transparent;
  background: ${({ $color1, $color2 }) =>
    `linear-gradient(90deg, ${$color1}, ${$color2})`};
  -webkit-background-clip: text;
`;

export const ContentImage = styled(Image)`
  grid-area: image;
  width: 550px;
  height: 450px;
  @media (max-width: 1199px) {
    width: 385px;
    height: 315px;
  }
  @media (max-width: 767px) {
    font-size: 24px;
    line-height: 28.64px;
    text-align: left;
    order: 2;
    width: 100%;
    height: 100%;
  }
`;
