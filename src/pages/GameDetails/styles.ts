import { Link } from "react-router-dom";
import { styled } from "styled-components";

interface GameDetailsStylesType {
  active?: boolean | undefined;
}

export const MainContainer = styled.div`
  .game-infos {
    padding: 24px 32px;
    @media (max-width: 700px) {
      padding: 16px;
    }
  }
`;

export const GameImage = styled.div<{ imageurl: string }>`
  background-image: ${({ imageurl }) => `url(${imageurl})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 32px;
  height: 410px;
  width: 100%;

  .name {
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 30px;
    text-shadow: 1px 1px 2px black;
    text-transform: uppercase;

    @media (max-width: 700px) {
      font-size: 20px;
    }
  }

  @media (max-width: 700px) {
    height: calc(100vw * 0.58);
    padding: 16px;
  }
`;

export const BreadcrumbContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 30px;
  font-size: 20px;
  @media (max-width: 700px) {
    font-size: 16px;
  }

  .links {
    color: ${({ theme }) => theme.colors.textLight};
    gap: 8px;
    display: flex;
  }

  .line {
    background-color: ${({ theme }) => theme.colors.shapeDark};
    border: none;
    height: 5px;
    flex-grow: 1;

    @media (max-width: 700px) {
      display: none;
    }
  }
`;

export const BreadcrumbLink = styled(Link)<GameDetailsStylesType>`
  color: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.textLight};
  text-decoration: none;
`;

export const Details = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 32px;
  margin-top: 48px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const GameDescription = styled.div`
  background-color: ${({ theme }) => theme.colors.shapeDark};
  border-radius: 5px;
  flex-grow: 1;
  padding: 24px;

  @media (max-width: 700px) {
    padding: 16px;
  }

  .title {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 20px;
    margin-bottom: 24px;
    @media (max-width: 700px) {
      font-size: 16px;
      margin-bottom: 16px;
    }
  }

  .text {
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 20px;
    @media (max-width: 700px) {
      font-size: 14px;
    }
  }
`;

export const DetailsRightContent = styled.div`
  min-width: 355px;

  @media (max-width: 800px) {
    width: 100%;
  }

  .item {
    background-color: ${({ theme }) => theme.colors.shapeDark};
    border-radius: 5px;
    margin-bottom: 16px;
    padding: 8px 16px;
    .title {
      color: ${({ theme }) => theme.colors.primary};
      margin-bottom: 4px;
      @media (max-width: 700px) {
        font-size: 16px;
      }
    }

    .content {
      color: ${({ theme }) => theme.colors.textLight};
      @media (max-width: 700px) {
        font-size: 14px;
      }
    }
  }

  .buttons {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 32px;

    .button-item {
      background-color: ${({ theme }) => theme.colors.primary};
      border: none;
      border-radius: 5px;
      color: ${({ theme }) => theme.colors.textDark};
      font-size: 16px;
      outline: none;
      padding: 14px 0;
      width: 100%;

      transition: 0.4s filter;

      &:hover {
        cursor: pointer;
        filter: brightness(0.7);
      }
      @media (max-width: 700px) {
        font-size: 14px;
      }
    }
  }
`;
