import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./constants";
import Home from "../pages/Home/home";
import Page404 from "../pages/Page404/page404";
import Login from "../pages/Login/login";
import News from "../pages/News/news";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.NEWS} element={<News />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
