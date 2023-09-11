import { Navigate, createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { GameDetails } from "./pages/GameDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="login" replace />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/perfil",
    element: <Home />,
  },
  {
    path: "/game-details/:id",
    element: <GameDetails />,
  },
]);
