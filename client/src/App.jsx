import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Products from "./pages/Products";
import Pricing from "./pages/Pricing";
import Support from "./pages/Support";
import Error from "./pages/Error";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Dashboard from "./pages/Dashboard";

import Summary from "./components/core/dashboard/Summary";
import Orders from "./components/core/dashboard/Orders";
import Holdings from "./components/core/dashboard/Holdings";
import Positions from "./components/core/dashboard/Positions";
import Funds from "./components/core/dashboard/Funds";
import Apps from "./components/core/dashboard/Apps";
import OpenRoute from "./components/core/auth/OpenRoute";
import PrivateRoute from "./components/core/auth/PrivateRoute";

const App = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname.split("/")[1] !== "user" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/account"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />

        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route exact path="/user/dashboard" element={<Summary />} />
          <Route path="/user/orders" element={<Orders />} />
          <Route path="/user/holdings" element={<Holdings />} />
          <Route path="/user/positions" element={<Positions />} />
          <Route path="/user/funds" element={<Funds />} />
          <Route path="/user/apps" element={<Apps />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
      {location.pathname.split("/")[1] !== "user" && <Footer />}
    </>
  );
};

export default App;
