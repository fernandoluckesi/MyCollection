import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

interface SidebarMenuStylesProps {
  showSidebar: boolean;
  isExitingSidebar: boolean;
}

const slideOut = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const slideOutMobile = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, 100%);
  }
`;

const slideInMobile = keyframes`
  0% {
    transform: translate(0, 100%);
  }
  100% {
    transform: translate(0, 0);
  }
`;

export const MainContainer = styled.div<SidebarMenuStylesProps>`
  animation: ${({ showSidebar }) => (showSidebar ? slideIn : slideOut)} 0.5s
    ease-in-out;
  animation-fill-mode: forwards;
  background-color: ${({ theme }) => theme.colors.shapeLight};
  display: ${({ isExitingSidebar }) => (isExitingSidebar ? "block" : "none")};
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 329px;

  @media (max-width: 800px) {
    animation: ${({ showSidebar }) =>
        showSidebar ? slideInMobile : slideOutMobile}
      0.5s;
    bottom: 0;
    border-radius: 10px 10px 0 0;
    height: 32vh;
    width: 100%;
    top: unset;
  }

  @media (min-width: 1700px) {
    animation: none;
    display: block;
    position: relative;

    height: 100%;
    width: 300px;
  }
`;

export const CloseSidebarButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  width: 19px;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 1700px) {
    display: none;
  }
`;

export const Header = styled.div`
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  display: flex;
  height: 109px;
  justify-content: flex-end;
  padding: 0 24px;

  @media (max-width: 800px) {
    height: fit-content;
    padding: 24px;
  }
`;

export const IoIosArrowBackStyle = styled(IoIosArrowBack)`
  @media (max-width: 800px) {
    display: none;
  }
`;

export const AiOutlineCloseStyle = styled(AiOutlineClose)`
  @media (min-width: 800px) {
    display: none;
  }
`;

export const NavContainer = styled.nav`
  padding: 24px;

  @media (max-width: 800px) {
    padding: 8px 24px;
  }
`;

export const SearchInputContainer = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 5px;
  display: flex;
  gap: 16px;
  padding: 10px;

  &:focus-within {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

export const SearchInput = styled.input`
  background-color: ${({ theme }) => theme.colors.gray};
  border: none;
  color: ${({ theme }) => theme.colors.secondary};
  outline: none;
  flex-grow: 1;
`;

export const NavList = styled.ul`
  margin-top: 16px;

  @media (max-width: 800px) {
    margin: 0;
  }
`;

export const NavListItem = styled.li`
  list-style: none;
`;

export const NavListLink = styled(Link)<{ listItemActive: boolean }>`
  align-items: center;
  color: ${({ listItemActive, theme }) =>
    listItemActive ? theme.colors.primary : theme.colors.shapeDark};
  display: flex;
  padding: 16px 0;
  text-decoration: none;

  .list-item-title {
    flex-grow: 1;
    font-size: 16px;
    margin-left: 25px;
  }
`;
