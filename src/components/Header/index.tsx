import React from "react";
import {
  CartButton,
  HeaderLeftContent,
  HeaderRightContent,
  ItemsCountCart,
  MainContainer,
  MenuBurgerButton,
  PerfilButton,
} from "./styles";
import { LogoText } from "../../components/LogoText";
import { GiHamburgerMenu } from "react-icons/gi/";
import { MdOutlineShoppingCart } from "react-icons/md/";
import { FaRegUser } from "react-icons/fa/";

import { theme } from "../../global/styles/theme";

interface HeaderProps {
  handleToggleSidebar: () => any;
}

export const Header: React.FC<HeaderProps> = ({ handleToggleSidebar }) => {
  return (
    <MainContainer>
      <HeaderLeftContent>
        <MenuBurgerButton onClick={handleToggleSidebar}>
          <GiHamburgerMenu color={theme.colors.primary} size={32} />
        </MenuBurgerButton>
        <LogoText fontSize={25} />{" "}
      </HeaderLeftContent>
      <HeaderRightContent>
        <CartButton>
          <MdOutlineShoppingCart color={theme.colors.primary} size={26} />
          <ItemsCountCart>10</ItemsCountCart>
        </CartButton>
        <PerfilButton>
          <FaRegUser color={theme.colors.shapeLight} size={16} />
        </PerfilButton>
      </HeaderRightContent>
    </MainContainer>
  );
};
