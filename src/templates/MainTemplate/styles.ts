import styled from "styled-components";

interface MainTemplateStylesProps {
  showSidebar: boolean;
}

export const MainContainer = styled.div<MainTemplateStylesProps>`
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
  padding-left: ${({ showSidebar }) => (showSidebar ? "329px" : "0px")};
  position: relative;
  transition: 0.5s padding-left ease-in-out;

  @media (max-width: 1100px) {
    padding-left: 0;
  }

  @media (min-width: 1700px) {
    display: flex;
    margin: 0 auto;
    max-width: 1500px;
    height: 100vh;
  }
`;

export const ContentViewContainer = styled.div`
  overflow-y: auto;
  @media (min-width: 1700px) {
    flex-grow: 1;
    max-width: 1200px;
  }
`;
