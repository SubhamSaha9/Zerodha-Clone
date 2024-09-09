import React, { useState } from "react";

import { Link } from "react-router-dom";
import Nav from "./Nav";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container ">
      <Link to="/">
        <img
          src="../../media/images/logo.svg"
          style={{ width: "150px" }}
          alt="logo"
        />
      </Link>
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/user/dashboard"
              onClick={() => handleMenuClick(0)}
            >
              <div className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </div>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/user/orders"
              onClick={() => handleMenuClick(1)}
            >
              <div className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </div>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/user/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <div className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </div>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/user/positions"
              onClick={() => handleMenuClick(3)}
            >
              <div className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </div>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/user/funds"
              onClick={() => handleMenuClick(4)}
            >
              <div className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </div>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/user/apps"
              onClick={() => handleMenuClick(6)}
            >
              <div className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </div>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <Nav />
        </div>
      </div>
    </div>
  );
};

export default Menu;
