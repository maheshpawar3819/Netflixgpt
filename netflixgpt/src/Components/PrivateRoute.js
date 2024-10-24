import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isLoggin = useSelector((store) => store.auth.isLoggin);
  return isLoggin ? children : <Navigate to={"/browser"} />;
};

export default PrivateRoute;
