import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Login } from ".";

// Mock para funções e serviços externos
jest.mock("../../services/api", () => ({
  api: {
    patch: jest.fn(),
  },
  getUser: jest.fn(),
}));
jest.mock("js-cookie", () => ({
  set: jest.fn(),
}));
jest.mock("../../utils/generateRandomToken", () => ({
  generateRandomToken: jest.fn(),
}));

describe("Login Component", () => {
  it("renders without errors", () => {
    const { container } = render(<Login />);
    expect(container).toBeInTheDocument();
  });

  it("validates email and password input fields", async () => {
    const { getByPlaceholderText, getByText } = render(<Login />);
    const emailInput = getByPlaceholderText("E-MAIL");
    const passwordInput = getByPlaceholderText("SENHA");
    const loginButton = getByText("ENTRAR");

    // Tente clicar no botão sem preencher campos
    fireEvent.click(loginButton);
    await waitFor(() => {
      expect(getByText("Digite um e-mail válido")).toBeInTheDocument();
      expect(getByText("Digite uma senha")).toBeInTheDocument();
    });

    // Preencha campos com valores inválidos
    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    fireEvent.change(passwordInput, { target: { value: "" } });
    fireEvent.click(loginButton);
    await waitFor(() => {
      expect(getByText("Digite um e-mail válido")).toBeInTheDocument();
      expect(getByText("Digite uma senha")).toBeInTheDocument();
    });

    // Preencha campos com valores válidos
    fireEvent.change(emailInput, { target: { value: "valid@email.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(loginButton);
    await waitFor(() => {
      expect(getByText("Digite um e-mail válido")).not.toBeInTheDocument();
      expect(getByText("Digite uma senha")).not.toBeInTheDocument();
    });
  });

  it("handles login button click and redirects on success", async () => {
    const { getByPlaceholderText, getByText } = render(<Login />);
    const emailInput = getByPlaceholderText("E-MAIL");
    const passwordInput = getByPlaceholderText("SENHA");
    const loginButton = getByText("ENTRAR");

    // Configure os mocks para simular um login bem-sucedido
    const mockUser = { id: 1 };
    const mockToken = "mock-token";

    // Preencha campos com valores válidos
    fireEvent.change(emailInput, { target: { value: "valid@email.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    // Simule o clique no botão de login
    fireEvent.click(loginButton);

    // Aguarde a redireção após o login bem-sucedido
    await waitFor(() => {
      expect(window.location.pathname).toBe("/home");
    });

    // Verifique se a função Cookies.set foi chamada com o token correto
    expect(require("js-cookie").set).toHaveBeenCalledWith("token", mockToken);
  });
});
