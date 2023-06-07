import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Journal from "../pages/Journal";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index path="/" Component={Home} />
      <Route path="/profile" Component={Profile} />
      <Route path="/journal" Component={Journal} />
    </Routes>
  );
};

export default AppRoutes;
