import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { router } from "./router/route.router";

const App: FC = () => {
  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
