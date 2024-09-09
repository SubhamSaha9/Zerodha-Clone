import React from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  return (
    <div className="my-5">
      <nav
        className="navbar navbar-expand-lg border-bottom fixed-top"
        style={{ backgroundColor: "#FFF" }}
      >
        <div className="container p-2">
          <NavLink className="navbar-brand" to="/">
            <img
              src="../media/images/logo.svg"
              alt="logo"
              style={{ width: "25%" }}
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item fw-medium">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to={token ? "/user/dashboard" : "/account"}
                >
                  {token ? <>dashboard</> : <>Sign In</>}
                </NavLink>
              </li>
              <li className="nav-item fw-medium">
                <NavLink className="nav-link active" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item fw-medium">
                <NavLink className="nav-link active" to="/products">
                  Product
                </NavLink>
              </li>
              <li className="nav-item fw-medium">
                <NavLink className="nav-link active" to="/pricing">
                  Pricing
                </NavLink>
              </li>
              <li className="nav-item fw-medium">
                <NavLink className="nav-link active" to="/support">
                  Support
                </NavLink>
              </li>
              <li className="nav-item fw-medium">
                <GiHamburgerMenu className="mt-2 pt-1 fs-4 mx-4" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
