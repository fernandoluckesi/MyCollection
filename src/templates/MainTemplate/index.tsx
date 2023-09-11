import React, { useState } from "react";
import { ContentViewContainer, MainContainer } from "./styles";
import { Header } from "../../components/Header";
import { SidebarMenu } from "../../components/SidebarMenu";

interface MainTemplateProps {
  children: React.ReactNode;
}

export const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [isExitingSidebar, setIsExitingSidebar] = useState<boolean>(false);

  const handleToggleSidebar = () => {
    if (showSidebar) {
      const timeout = setTimeout(() => {
        setIsExitingSidebar(false);
      }, 400);

      setShowSidebar(false);
      return () => {
        clearTimeout(timeout);
      };
    } else {
      setIsExitingSidebar(true);
      setShowSidebar(!showSidebar);
    }
  };

  return (
    <MainContainer showSidebar={showSidebar}>
      <SidebarMenu
        showSidebar={showSidebar}
        handleToggleSidebar={handleToggleSidebar}
        isExitingSidebar={isExitingSidebar}
      />

      <ContentViewContainer>
        <Header handleToggleSidebar={handleToggleSidebar} />
        {children}
      </ContentViewContainer>
    </MainContainer>
  );
};
