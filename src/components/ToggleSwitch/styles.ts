import styled from "styled-components";

interface ToggleSwitchStylesProps {
  checked: boolean;
}

export const MainContainer = styled.button<ToggleSwitchStylesProps>`
  background-color: ${({ theme }) => theme.colors.inative};
  border: none;
  border-radius: 40px;
  display: flex;
  height: 16px;
  outline: none;
  position: relative;
  transition: all 0.3s ease-in-out;
  width: 50px;

  &:hover {
    cursor: pointer;
  }
`;

export const Slider = styled.span<ToggleSwitchStylesProps>`
  position: absolute;
  background-color: ${({ theme, checked }) =>
    checked ? theme.colors.primary : theme.colors.shapeLight};
  border-radius: 50%;
  height: 16px;
  width: 16px;
  transition: all 0.3s ease-in-out;
  transform: ${({ checked }) => checked && "translateX(34px)"};
`;
