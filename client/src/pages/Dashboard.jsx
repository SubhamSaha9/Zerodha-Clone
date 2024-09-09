import React from "react";

import { Outlet } from "react-router-dom";
import "./dashboard.css";
import TopBar from "../components/core/dashboard/TopBar";
import WatchList from "../components/core/dashboard/WatchList";
import { useSelector } from "react-redux";
import BuyActionWindow from "../components/core/dashboard/BuyActionWindow";
const Dashboard = () => {
  const { openBuyWindow, stockId } = useSelector((state) => state.buyStock);
  return (
    <div>
      <TopBar />
      <div className="dashboard-container">
        <WatchList />
        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>
      {openBuyWindow && <BuyActionWindow uid={stockId} />}
    </div>
  );
};

export default Dashboard;
