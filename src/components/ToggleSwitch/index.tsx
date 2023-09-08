import React from "react";
import { MainContainer, Slider } from "./styles";

interface ToggleSwitchProps {
  checked: boolean;
  handleChangeChecked: () => any;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked,
  handleChangeChecked,
}) => {
  return (
    <MainContainer checked={checked} onClick={handleChangeChecked}>
      <Slider checked={checked} />
    </MainContainer>
  );
};
