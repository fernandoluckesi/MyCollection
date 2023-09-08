import styled from "styled-components";
import { LogoTextProps } from ".";

export const MainContainer = styled.div<LogoTextProps>`
  width: fit-content;

  p {
    color: ${({ theme }) => theme.colors.textLight};
    font-size: ${({ fontSize }) => fontSize}px;

    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
