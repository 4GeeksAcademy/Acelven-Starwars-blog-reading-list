import React from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import SW from "../../img/sw.png";
import "../../styles/index.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <div id="logo">
        <Link to="/">
          <Image src={SW} />
        </Link>
      </div>
      <div className="ml-auto">
        <Link to="/demo">
          <button className="btn btn-primary">
            Check the Context in action
          </button>
        </Link>
      </div>
    </nav>
  );
};
