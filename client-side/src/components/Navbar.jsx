import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="d-flex justify-content-center p-2 shadow">
      <Link to={"/"}>home</Link>
      <Link to={"/login"} className="mx-4">
        login
      </Link>
      <Link to={"/Auth"}>auth route</Link>
    </nav>
  );
};
export default Navbar;
