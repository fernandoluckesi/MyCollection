import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { getUserByToken } from "../services/api";

interface AuthenticationData {
  isAuthenticated: string | undefined;
  userId: number | null;
  isLoading: boolean;
}

export const useAuthentication = (): AuthenticationData => {
  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUserId] = useState<number | null>(null);

  const isAuthenticated = (): string | undefined => {
    const token = Cookies.get("token");
    return token;
  };

  const navigate = useNavigate();

  useEffect(() => {
    const token = isAuthenticated();
    if (!token) {
      navigate("/login");
    } else {
      getUserByToken(token).then((user) => {
        setUserId(user.id);
        setIsLoading(false);
      });
    }
  }, []);

  return { isAuthenticated: isAuthenticated(), userId, isLoading };
};
