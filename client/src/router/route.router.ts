import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/user/Login";
import { Register } from "../pages/user/Register";

export const router = createBrowserRouter([
    {
      path: '/login',
      element: Login()
    },
    {
      path: '/register',
      element: Register()
    },
  ])