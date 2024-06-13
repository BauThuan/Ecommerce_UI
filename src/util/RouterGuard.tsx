/* eslint-disable prettier/prettier */
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const RouterGuard = () => {
  const tokenRef = "kskfkskdf";

  return tokenRef ? <Outlet /> : <Navigate to="/login" replace />;
};

export default RouterGuard;
