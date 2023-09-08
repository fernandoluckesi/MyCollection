import React from "react";
import { MainContainer } from "./styles";

export interface LogoTextProps {
  fontSize: number;
}

export const LogoText: React.FC<LogoTextProps> = ({ fontSize }) => {
  return (
    <MainContainer fontSize={fontSize}>
      <p>
        <span>My</span>Collection
      </p>
    </MainContainer>
  );
};
