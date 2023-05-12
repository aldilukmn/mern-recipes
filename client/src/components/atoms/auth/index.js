import React from "react";
import { Link, useLocation } from "react-router-dom";

const Auth = () => {
  const location = useLocation();
  return (
    <>
      <Link to={"/login"} className={`nav-link ${location.pathname === "/login" ? "active" : ""}`}>
        Login
      </Link>
      <Link to={"/register"} className={`nav-link ${location.pathname === "/register" ? "active" : ""}`}>
        Register
      </Link>
    </>
  );
};

export default Auth;
