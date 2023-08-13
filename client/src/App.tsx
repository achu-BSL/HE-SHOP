import React from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Login } from "./pages/user/Login";
import { Register } from "./pages/user/Register";

function App() {
  return (
    <>
    <NavBar/>
    <Register/>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
