import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainContainer = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: center;
  height: 100vh;
  padding: 0 32px;
`;

export const FormContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  @media (max-width: 420px) {
    width: 100%;
  }
`;

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 16px;

  @media (max-width: 420px) {
    width: 100%;
  }
`;

export const InputFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (max-width: 420px) {
    width: 100%;
  }
`;

export const InputForm = styled.input`
  background-color: ${({ theme }) => theme.colors.shapeDark};
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.textLight};
  display: block;
  font-size: 16px;
  padding: 10px 12px;
  width: 278px;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 420px) {
    width: 100%;
  }
`;

export const FomrErrorMessage = styled.small`
  color: ${({ theme }) => theme.colors.alert};
  text-align: start;
  width: 100%;
`;

export const ButtonSubmit = styled.button`
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.inative : theme.colors.primary};
  border: none;
  border-radius: 5px;
  line-height: 19px;
  margin: 24px 0 18px;
  outline: none;
  padding: 10px;
  transition: 0.4s filter;
  width: 100%;

  &:hover {
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    filter: ${({ disabled }) =>
      disabled ? "brightness(1)" : "brightness(0.7)"};
  }
`;

export const StayLoggedInContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  width: 100%;
`;

export const StayLoggedInText = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 16px;
`;

export const SignUpLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 15px;
  margin-top: 24px;
  text-align: end;
  text-decoration: none;
  width: 100%;
`;
