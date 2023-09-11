import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { getUserByToken } from "../services/api";

interface AuthenticationData {
  isAuthenticated: string | undefined;
  userId: number | null;
  notRenderHome: boolean;
  notRenderLogin: boolean;
}

export const useAuthentication = (
  isLoginScreen: boolean
): AuthenticationData => {
  const [notRenderHome, setNotRenderHome] = useState<boolean>(true);
  const [notRenderLogin, setNotRenderLogin] = useState<boolean>(true);
  const [userId, setUserId] = useState<number | null>(null);

  const isAuthenticated = (): string | undefined => {
    const token = Cookies.get("token");
    return token;
  };

  const navigate = useNavigate();

  useEffect(() => {
    const token = isAuthenticated();

    getUserByToken(token).then((user) => {
      if (!user || !token) {
        setNotRenderLogin(false);
        navigate("/login");
      } else if (isLoginScreen && user) {
        setNotRenderHome(false);
        navigate("/home");
      } else {
        setUserId(user.id);
        setNotRenderHome(false);
      }
    });
  }, []);

  return {
    isAuthenticated: isAuthenticated(),
    userId,
    notRenderHome,
    notRenderLogin,
  };
};
