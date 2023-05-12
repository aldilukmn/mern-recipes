import React from "react";
import { Link } from "react-router-dom";

const Logout = ({ ...rest }) => {
  return (
    <>
      <a className="nav-link" style={{ cursor: "pointer" }} {...rest}>
        Logout
      </a>
    </>
  );
};

export default Logout;
