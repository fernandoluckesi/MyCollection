import React from "react";
import {
  AiOutlineCloseStyle,
  CloseSidebarButton,
  Header,
  IoIosArrowBackStyle,
  MainContainer,
  NavContainer,
  NavList,
  NavListItem,
  NavListLink,
  SearchInput,
  SearchInputContainer,
} from "./styles";
import { IoIosArrowForward } from "react-icons/io/";
import { AiOutlineSearch } from "react-icons/ai/";
import { GoHome } from "react-icons/go/";
import { FaRegUser } from "react-icons/fa/";

import { theme } from "../../global/styles/theme";
import { useLocation } from "react-router-dom";

interface SidebarMenuProps {
  showSidebar: boolean;
  handleToggleSidebar: () => void;
  isExitingSidebar: boolean;
}

interface NavListItemType {
  icon: React.ReactElement;
  title: string;
  navigate: string;
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({
  showSidebar,
  handleToggleSidebar,
  isExitingSidebar,
}) => {
  const location = useLocation();

  const handleClickSidebar = () => {
    handleToggleSidebar();
  };

  const navListItems: NavListItemType[] = [
    {
      icon: <GoHome />,
      title: "HOME",
      navigate: "/home",
    },
    {
      icon: <FaRegUser />,
      title: "PERFIL",
      navigate: "/perfil",
    },
  ];

  return (
    <MainContainer
      showSidebar={showSidebar}
      isExitingSidebar={isExitingSidebar}
    >
      <Header>
        <CloseSidebarButton onClick={handleClickSidebar}>
          <IoIosArrowBackStyle size={19} color={theme.colors.textDark} />
          <AiOutlineCloseStyle size={19} color={theme.colors.textDark} />
        </CloseSidebarButton>
      </Header>
      <NavContainer>
        <SearchInputContainer>
          <AiOutlineSearch color={theme.colors.secondary} size={24} />
          <SearchInput placeholder="BUSCAR" />
        </SearchInputContainer>
        <NavList>
          {navListItems.map((item, index) => (
            <NavListItem key={index}>
              <NavListLink
                to={item.navigate}
                listItemActive={item.navigate === location.pathname}
              >
                {item.icon}
                <p className="list-item-title">{item.title}</p>
                <IoIosArrowForward size={19} />
              </NavListLink>
            </NavListItem>
          ))}
        </NavList>
      </NavContainer>
    </MainContainer>
  );
};
