import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LadingPage from "../ladingPage/LadingPage";
import Login from "../login/Login";
import Cadastro from "../cadastro/Cadastro";
import Planos from "../planos/planos"
import Home from '../home/Home'
import App from '../main/App'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<LadingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="planos" element={<Planos/>}/>
        <Route path="/cadastro" element={<Cadastro />} />
        <Route element={<App/>}>
          <Route path="/Home" element={<Home/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
