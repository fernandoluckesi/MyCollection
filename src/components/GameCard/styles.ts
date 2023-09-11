import { styled, css } from "styled-components";

interface GameCardStylesProps {
  imageurl: string;
  inCarousel?: boolean;
}

export const MainContainer = styled.div<GameCardStylesProps>`
  background-image: ${({ imageurl }) => `url(${imageurl})`};
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 5px;
  height: 225px;

  ${({ inCarousel }) =>
    inCarousel
      ? css`
          min-width: 350px;

          @media (max-width: 470px) {
            height: calc((100vw - 111px) * 0.642557142557143);
            min-width: calc(100vw - 111px);
          }
        `
      : css`
          width: calc((100% - 24px * 2) / 3);
          height: calc(((100vw - 24px * 2) / 3) * 0.642557142557143);
          max-width: 350px;
          max-height: 225px;

          @media (max-width: 800px) {
            height: calc(((100vw - 24px * 2) / 3) * 0.642557142557143);
            width: calc((100% - 16px * 1) / 2);
          }

          @media (max-width: 580px) {
            height: calc((100vw - 64px) * 0.642557142557143);
            width: 100%;
          }
        `}
`;

export const Overlay = styled.div<{
  inCarousel: boolean | undefined;
}>`
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  opacity: 0;
  padding: 24px;
  transition: opacity 0.5s;
  width: 100%;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 800px) {
    padding: ${({ inCarousel }) => !inCarousel && "12px"};
  }

  @media (max-width: 580px) {
    padding: 16px;
  }
`;

export const GameInfosContainer = styled.div<{
  inCarousel: boolean | undefined;
}>`
  .name {
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 15px;
    line-height: 1.2;
    margin-bottom: 16px;

    @media (max-width: 800px) {
      font-size: ${({ inCarousel }) => !inCarousel && "12px"};
      margin-bottom: ${({ inCarousel }) => !inCarousel && "6px"};
    }

    @media (max-width: 580px) {
      font-size: 15px;
      margin-bottom: 6px;
    }
  }

  .price {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 16px;
    line-height: 19px;

    @media (max-width: 800px) {
      font-size: 13px;
    }

    @media (max-width: 580px) {
      font-size: 16px;
    }
  }
`;

export const OverlayButtons = styled.div<{
  inCarousel: boolean | undefined;
}>`
  display: flex;
  justify-content: flex-end;
  gap: 24px;

  @media (max-width: 1050px) {
    gap: 12px;
  }

  .add-cart,
  .link-navigate {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.textDark};
    font-size: 14px;
    padding: 9px 16px;
    transition: 0.4s filter;

    &:hover {
      cursor: pointer;
      filter: brightness(0.7);
    }

    @media (max-width: 1050px) {
      font-size: ${({ inCarousel }) => !inCarousel && "12px"};
      padding: 6px 12px;
    }
  }

  .add-cart {
    border: none;
    outline: none;
  }

  .link-navigate {
    text-decoration: none;
  }
`;
