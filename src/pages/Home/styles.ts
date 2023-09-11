import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  min-height: calc(100vh - 109px);
  padding: 16px;
`;

export const SearchInputContainer = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 5px;
  display: flex;
  gap: 16px;
  margin: 24px 0;
  padding: 10px;

  &:focus-within {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
  }

  @media (min-width: 1100px) {
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

export const SectionTitleContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 32px;
  margin: 8px 0 16px;
  padding: 0 32px;

  .title {
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 30px;
    font-weight: 400;

    @media (max-width: 800px) {
      font-size: 20px;
    }
  }

  .line {
    background-color: ${({ theme }) => theme.colors.shapeDark};
    border: none;
    height: 5px;
    flex-grow: 1;
  }
`;

export const HighlightsContainer = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 30px;
  padding: 0 32px;
  position: relative;
`;

export const HighlightsCarousel = styled.div`
  display: flex;
  gap: 24px;
  overflow-x: hidden;
  white-space: nowrap;

  @media (max-width: 470px) {
    gap: 0;
  }
`;

export const ScrollButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  display: flex;
  font-size: 20px;
  height: 20px;
  position: absolute;
`;

export const LeftScrollButton = styled(ScrollButton)`
  left: 0;
`;

export const RightScrollButton = styled(ScrollButton)`
  transform: rotate(180deg);
  right: 0;
`;

export const BestSellersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 0 32px;

  @media (max-width: 800px) {
    gap: 16px;
  }

  @media (max-width: 580px) {
    align-items: center;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 16px;
  }
`;
