import React from "react";
import { styled } from "styled-components";
import { COLORS } from "../../constants/colors";

export const BlueButton = ({
  text,
  width = "auto",
  height = "auto",
  margin,
  padding,
  fontSize = "14px",
  radius,
  onBtnHandle,
}) => {
  return (
    <Button
      width={width}
      height={height}
      margin={margin}
      padding={padding}
      color={COLORS.White}
      fontSize={fontSize}
      radius={radius}
      onClick={(e) => (onBtnHandle ? onBtnHandle() : null)}
    >
      {text}
    </Button>
  );
};

const Button = styled.button`
  display: block;
  width: ${({ width }) => width};
  min-width: max-content;
  height: ${({ height }) => height};
  border: 0px;
  border-radius: ${({ radius }) => radius || "0px"};
  margin: ${({ margin }) => margin || "auto"};
  padding: ${({ padding }) => padding || "auto"};
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  cursor: pointer;

  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 600;
  line-height: 21.6px;
`;
