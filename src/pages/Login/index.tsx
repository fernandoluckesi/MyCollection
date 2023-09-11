import React, { useState } from "react";
import {
  ButtonSubmit,
  Form,
  FormContainer,
  FomrErrorMessage,
  InputForm,
  InputFormContainer,
  MainContainer,
  SignUpLink,
  StayLoggedInContainer,
  StayLoggedInText,
} from "./styles";
import { LogoText } from "../../components/LogoText";
import { ToggleSwitch } from "../../components/ToggleSwitch";
import { useNavigate } from "react-router-dom";
import { api, getUser } from "../../services/api";
import Cookies from "js-cookie";
import { generateRandomToken } from "../../utils/generateRandomToken";
import { useAuthentication } from "../../hooks/useAuthentication";
import { Loading } from "../../components/Loading";

export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [emailChangedAfterBlur, setEmailChangedAfterBlur] =
    useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<string>("");
  const [loginErrorMessage, setLoginErrorMessage] = useState<string>("");
  const [buttonSubmitDisabled, setButtonSubmitDisabled] =
    useState<boolean>(true);
  const [saveLoginChecked, setSaveLoginChecked] = useState<boolean>(false);
  const [isLoadingLogin, setIsLoadingLogin] = useState(false);

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value) || !value) {
      setEmailError("Digite um e-mail válido");
      setButtonSubmitDisabled(true);
    } else {
      setEmailError("");
      password && setButtonSubmitDisabled(false);
    }
    setEmailChangedAfterBlur(true);
  };

  const validatePassword = (value: string) => {
    if (!value) {
      setPasswordError("Digite uma senha");
      setButtonSubmitDisabled(true);
    } else {
      setPasswordError("");
      email && !emailError && setButtonSubmitDisabled(false);
    }
  };

  const handleChangeValueInput = (
    type: "email" | "password",
    value: string
  ) => {
    if (type === "email") {
      emailChangedAfterBlur && validateEmail(value);
      setEmail(value);
    } else {
      validatePassword(value);
      setPassword(value);
    }
  };

  const navigate = useNavigate();

  const handleSaveLoginChecked = () => {
    setSaveLoginChecked(!saveLoginChecked);
  };

  const handleOnClickLogin = async (event: React.MouseEvent) => {
    event.preventDefault();
    setIsLoadingLogin(true);
    try {
      const user = await getUser(email, password);
      if (user) {
        setLoginErrorMessage("");
        setIsLoadingLogin(false);

        const token: string = generateRandomToken(32);

        await api.patch(`/users/${user.id}`, { token });

        if (saveLoginChecked) {
          const expirationDate: Date = new Date("9999-12-31T23:59:59");
          Cookies.set("token", token, { expires: expirationDate });
        } else {
          Cookies.set("token", token);
        }

        navigate("/home");
      } else {
        setLoginErrorMessage("Seu e-mail ou senha estão incorretos");
        console.error("Credenciais inválidas");
      }
    } catch (error) {
      setLoginErrorMessage("Erro inesperado. Tente novamente");
      console.error("Erro ao fazer login:", error);
    }
  };

  const isLoginScreen = true;

  const { notRenderLogin } = useAuthentication(isLoginScreen);

  if (notRenderLogin) {
    return null;
  }

  return (
    <MainContainer>
      <FormContainer>
        <LogoText fontSize={30} />
        <Form>
          <InputFormContainer>
            <InputForm
              placeholder="E-MAIL"
              type="email"
              value={email}
              onChange={(e) => handleChangeValueInput("email", e.target.value)}
              onBlur={(e) => validateEmail(e.target.value)}
            />
            {emailError && <FomrErrorMessage>{emailError} </FomrErrorMessage>}
          </InputFormContainer>
          <InputFormContainer>
            <InputForm
              placeholder="SENHA"
              type="password"
              value={password}
              onChange={(e) =>
                handleChangeValueInput("password", e.target.value)
              }
              onBlur={(e) => validatePassword(e.target.value)}
            />
            {passwordError && (
              <FomrErrorMessage>{passwordError} </FomrErrorMessage>
            )}
          </InputFormContainer>
          {loginErrorMessage && (
            <FomrErrorMessage>{loginErrorMessage} </FomrErrorMessage>
          )}
          <ButtonSubmit
            type="submit"
            onClick={handleOnClickLogin}
            disabled={buttonSubmitDisabled}
          >
            {isLoadingLogin ? <Loading inButton /> : "ENTRAR"}
          </ButtonSubmit>
        </Form>
        <StayLoggedInContainer>
          <ToggleSwitch
            checked={saveLoginChecked}
            handleChangeChecked={handleSaveLoginChecked}
          />
          <StayLoggedInText>PERMANECER LOGADO</StayLoggedInText>
        </StayLoggedInContainer>
        <SignUpLink to="/sign-up">cadastro</SignUpLink>
      </FormContainer>
    </MainContainer>
  );
};
