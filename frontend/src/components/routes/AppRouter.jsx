import React from "react";
import Home from "@pages/Home/Home.jsx";
import HomeFiltered from "@pages/HomeFiltered/HomeFiltered.jsx";
import CardDescription from "@pages/CardDescription/CardDescription.jsx";
import Login from "@pages/Login/Login.jsx";
import Register from "@pages/Register/Register.jsx";
import AdminDashboard from "@pages/admin/AdminDashboard/AdminDashboard.jsx";
import { Routes, Route } from "react-router-dom";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/juegos/filtro/:consola/:genero/"
        element={<HomeFiltered />}
      />
      <Route path="/juegos/filtro/:ofertas" element={<HomeFiltered />} />
      <Route path="/juegos/search" element={<HomeFiltered />} />
      <Route path="/juegos/:id" element={<CardDescription />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin/dashboard/*" element={<AdminDashboard />} />
    </Routes>
  );
}

export default AppRouter;
