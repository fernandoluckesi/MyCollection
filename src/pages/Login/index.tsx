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

export const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailChangedAfterBlur, setEmailChangedAfterBlur] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const [buttonSubmitDisabled, setButtonSubmitDisabled] = useState(true);
  const [saveLoginChecked, setSaveLoginChecked] = useState(false);

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
    try {
      const user = await getUser(email, password);
      if (user) {
        setLoginErrorMessage("");

        const token: string = generateRandomToken(32);

        await api.patch(`/users/${user.id}`, { token });

        if (saveLoginChecked) {
          const expirationDate = new Date("9999-12-31T23:59:59");
          Cookies.set("token", token, { expires: expirationDate });
        } else {
          Cookies.set("token", token, { expires: 0 });
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
            ENTRAR
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
