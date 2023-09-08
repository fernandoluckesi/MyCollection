import React, { useEffect, useState } from "react";
import { MainContainer } from "./styles";
import { useAuthentication } from "../../hooks/useAuthentication";

export const Home: React.FC = () => {
  const { isAuthenticated, userId, isLoading } = useAuthentication();

  if (isLoading) {
    return null;
  }

  return (
    <MainContainer>
      <p>Tela home</p>
      <p>user id {userId} </p>
      <p>token {isAuthenticated} </p>
    </MainContainer>
  );
};
