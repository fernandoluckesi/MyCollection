import styled from "styled-components";

export const MainContainer = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.shapeDark};
  display: flex;
  justify-content: space-between;
  padding: 30px 24px;
`;

export const HeaderLeftContent = styled.div`
  align-items: center;
  display: flex;
  gap: 24px;
`;

export const MenuBurgerButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 1700px) {
    display: none;
  }
`;

export const HeaderRightContent = styled.div`
  align-items: center;
  display: flex;
  gap: 44px;
`;

export const CartButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  position: relative;

  &:hover {
    cursor: pointer;
  }
`;

export const ItemsCountCart = styled.p`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.alert};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.textLight};
  display: flex;
  height: 20px;
  justify-content: center;
  position: absolute;
  right: -10px;
  top: -10px;
  width: 20px;
`;

export const PerfilButton = styled.button`
  background-color: ${({ theme }) => theme.colors.blueDark};
  border: none;
  border-radius: 50%;
  outline: none;
  padding: 15px;
  transition: 0.4s filter;

  &:hover {
    cursor: pointer;
    filter: brightness(0.7);
  }
`;
