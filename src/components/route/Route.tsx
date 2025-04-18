import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../main/App";
import Login from "../login/Login";
import Cadastro from "../cadastro/Cadastro";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
