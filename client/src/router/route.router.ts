import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/user/Login";
import { Register } from "../pages/user/Register";
import { Home } from "../pages/user/Home";

export const router = createBrowserRouter([
    {
      path: '/login',
      element: Login()
    },
    {
      path: '/register',
      element: Register()
    },
    {
      path: '/',
      element: Home()
    }
  ])