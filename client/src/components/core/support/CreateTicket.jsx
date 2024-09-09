import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { FiCreditCard } from "react-icons/fi";
import { LuBarChart2 } from "react-icons/lu";
import { BiDoughnutChart } from "react-icons/bi";
import { CiBitcoin } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const CreateTicket = () => {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2">To create a ticket, select a relevant topic</h1>
        <div className="col-4 p-4 mt-2 mb-1">
          <h5 className="d-flex align-items-center gap-1">
            <BsFillPlusCircleFill /> Account Opening
          </h5>
          <div className="px-4">
            <NavLink
              to="/"
              style={{ textDecoration: "none", lineHeight: "2.2" }}
            >
              Getting started
            </NavLink>
            <br />
            <NavLink
              to="/"
              style={{ textDecoration: "none", lineHeight: "2.2" }}
            >
              Online
            </NavLink>
            <br />
            <NavLink
              to="/"
              style={{ textDecoration: "none", lineHeight: "2.2" }}
            >
              Offline
            </NavLink>
            <br />
            <NavLink
              to="/"
              style={{ textDecoration: "none", lineHeight: "2.2" }}
            >
              Charges
            </NavLink>
            <br />
            <NavLink
              to="/"
              style={{ textDecoration: "none", lineHeight: "2.2" }}
            >
              Company, Partnership and HUF
            </NavLink>
            <br />
            <NavLink
              to="/"
              style={{ textDecoration: "none", lineHeight: "2.2" }}
            >
              Non Resident Indian (NRI)
            </NavLink>
          </div>
        </div>

        <div className="col-4 p-4 mt-2 mb-1">
          <h5 className="d-flex align-items-center gap-1">
            <FaRegUser /> Your Zerodha Account
          </h5>
          <div className="px-4">
            <NavLink
              to="/"
              style={{ textDecoration: "none", lineHeight: "2.2" }}
            >
              Login credentials
            </NavLink>
            <br />
            <NavLink
              to="/"
              style={{ textDecoration: "none", lineHeight: "2.2" }}
            >
              Your Profile
            </NavLink>
            <br />
            <NavLink
              to="/"
              style={{ textDecoration: "none", lineHeight: "2.2" }}
            >
              Account modification and segment <br />
              addition
            </NavLink>
            <br />
            <NavLink
              to="/"
              style={{ textDecoration: "none", lineHeight: "2.2" }}
            >
              CMR & DP ID
            </NavLink>
            <br />
            <NavLink
              to="/"
              style={{ textDecoration: "none", lineHeight: "2.2" }}
            >
              Nomination
            </NavLink>
            <br />
          </div>
        </div>

        <div className="col-4 p-4 mt-2 mb-1">
          <h5 className="d-flex align-items-center gap-1">
            <LuBarChart2 /> Trading and Markets
          </h5>
          <div className="px-4">
            <NavLink
              to="/"
              style={{ textDecoration: "none", lineHeight: "2.2" }}
            >
              Trading FAQs
            </NavLink>
            <br />
            <NavLink
              to="/"
              style={{ textDecoration: "none", lineHeight: "2.2" }}
            >
              Kite
            </NavLink>
            <br />
            <NavLink
              to="/"
              style={{ textDecoration: "none", lineHeight: "2.2" }}
            >
              Margins
            </NavLink>
            <br />
            <NavLink
              to="/"
              style={{ textDecoration: "none", lineHeight: "2.2" }}
            >
              Product and order types
            </NavLink>
            <br />
            <NavLink
              to="/"
              style={{ textDecoration: "none", lineHeight: "2.2" }}
            >
              Corporate actions
            </NavLink>
            <br />
            <NavLink
              to="/"
              style={{ textDecoration: "none", lineHeight: "2.2" }}
            >
              Kite features
            </NavLink>
            <br />
          </div>
        </div>

        <div className="col-4 p-4 mt-0 mb-1">
          <h5 className="d-flex align-items-center gap-1">
            <FiCreditCard /> Funds
          </h5>
          <div className="px-4">
            <NavLink
              to="/"
              style={{ textDecoration: "none", lineHeight: "2.2" }}
            >
              Fund withdrawal
            </NavLink>
            <br />
            <NavLink
              to="/"
              style={{ textDecoration: "none", lineHeight: "2.2" }}
            >
              Adding funds
            </NavLink>
            <br />
            <NavLink
              to="/"
              style={{ textDecoration: "none", lineHeight: "2.2" }}
            >
              Adding bank accounts
            </NavLink>
            <br />
            <NavLink
              to="/"
              style={{ textDecoration: "none", lineHeight: "2.2" }}
            >
              eMandates
            </NavLink>
          </div>
        </div>

        <div className="col-4 p-4 mt-0 mb-1">
          <h5 className="d-flex align-items-center gap-1">
            <BiDoughnutChart /> Funds
          </h5>
          <div className="px-4">
            <NavLink
              to="/"
              style={{ textDecoration: "none", lineHeight: "2.2" }}
            >
              IPO
            </NavLink>
            <br />
            <NavLink
              to="/"
              style={{ textDecoration: "none", lineHeight: "2.2" }}
            >
              Portfolio
            </NavLink>
            <br />
            <NavLink
              to="/"
              style={{ textDecoration: "none", lineHeight: "2.2" }}
            >
              Funds statement
            </NavLink>
            <br />
            <NavLink
              to="/"
              style={{ textDecoration: "none", lineHeight: "2.2" }}
            >
              Profile
            </NavLink>
            <br />
            <NavLink
              to="/"
              style={{ textDecoration: "none", lineHeight: "2.2" }}
            >
              Reports
            </NavLink>
            <br />
            <NavLink
              to="/"
              style={{ textDecoration: "none", lineHeight: "2.2" }}
            >
              Referral program
            </NavLink>
          </div>
        </div>

        <div className="col-4 p-4 mt-0 mb-1">
          <h5 className="d-flex align-items-center gap-1">
            <CiBitcoin /> Coin
          </h5>
          <div className="px-4">
            <NavLink
              to="/"
              style={{ textDecoration: "none", lineHeight: "2.2" }}
            >
              Understanding mutual funds and Coin
            </NavLink>
            <br />
            <NavLink
              to="/"
              style={{ textDecoration: "none", lineHeight: "2.2" }}
            >
              Coin app
            </NavLink>
            <br />
            <NavLink
              to="/"
              style={{ textDecoration: "none", lineHeight: "2.2" }}
            >
              Coin web
            </NavLink>
            <br />
            <NavLink
              to="/"
              style={{ textDecoration: "none", lineHeight: "2.2" }}
            >
              Transactions and reports
            </NavLink>
            <br />
            <NavLink
              to="/"
              style={{ textDecoration: "none", lineHeight: "2.2" }}
            >
              National Pension Scheme (NPS)
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
