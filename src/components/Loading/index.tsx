import React from "react";
import { MainContainer } from "./styles";

import { theme } from "../../global/styles/theme";
import { ScaleLoader } from "react-spinners";

interface LoadingProps {
  inButton?: boolean | undefined;
}

export const Loading: React.FC<LoadingProps> = ({ inButton }) => {
  return (
    <MainContainer inButton={inButton}>
      <ScaleLoader
        color={theme.colors.primary}
        loading={true}
        width={10}
        height={10}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </MainContainer>
  );
};
