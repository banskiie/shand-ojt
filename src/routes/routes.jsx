import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Journal from "../pages/Journal";
import Reflection from "../pages/Reflection";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index path="/" Component={Home} />
      <Route path="/profile" Component={Profile} />
      <Route path="/journal" Component={Journal} />
      <Route path="/reflection" Component={Reflection} />
    </Routes>
  );
};

export default AppRoutes;
