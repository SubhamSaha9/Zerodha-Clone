import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="border-top"
      style={{ backgroundColor: "rgb(250, 250, 250)" }}
    >
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <img
              src="../media/images/logo.svg"
              style={{ width: "50%" }}
              alt="logo"
            />
            <p className="mt-3">
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>
          <div className="col nav-tags">
            <p>Company</p>
            <NavLink to="#" className="px-1">
              About
            </NavLink>
            <NavLink to="#" className="px-1">
              Products
            </NavLink>
            <NavLink to="#" className="px-1">
              Pricing
            </NavLink>
            <NavLink to="#" className="px-1">
              Referral programme
            </NavLink>
            <NavLink to="#" className="px-1">
              Careers
            </NavLink>
            <NavLink to="#" className="px-1">
              Zerodha.tech
            </NavLink>
            <NavLink to="#" className="px-1">
              Press & media
            </NavLink>
            <NavLink to="#" className="px-1">
              Zerodha cares (CSR)
            </NavLink>
          </div>
          <div className="col nav-tags">
            <p>Support</p>
            <NavLink to="#" className="px-1">
              Contact
            </NavLink>
            <NavLink to="#" className="px-1">
              Support portal
            </NavLink>
            <NavLink to="#" className="px-1">
              Z-Connect blog
            </NavLink>
            <NavLink to="#" className="px-1">
              List of charges
            </NavLink>
            <NavLink to="#" className="px-1">
              Downloads & resources
            </NavLink>
          </div>
          <div className="col nav-tags">
            <p>Account</p>
            <NavLink to="#" className="px-1">
              Open an account
            </NavLink>
            <NavLink to="#" className="px-1">
              Fund transfer
            </NavLink>
            <NavLink to="#" className="px-1">
              60 day challenge
            </NavLink>
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #1
            className="px-1"53/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to complaints@zerodha.com, for DP related to dp@zerodha.com.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
        <div className="row">
          <div className="col"></div>
          <div
            className="col-8 d-flex justify-content-evenly my-2 pb-2"
            style={{ textDecoration: "none" }}
          >
            <NavLink
              to="#"
              className="text-decoration-none text-black fw-medium"
            >
              NSE
            </NavLink>
            <NavLink
              to="#"
              className="text-decoration-none text-black fw-medium"
            >
              BSE
            </NavLink>
            <NavLink
              to="#"
              className="text-decoration-none text-black fw-medium"
            >
              Terms & Conditions
            </NavLink>
            <NavLink
              to="#"
              className="text-decoration-none text-black fw-medium"
            >
              Policies & procedures
            </NavLink>
            <NavLink
              to="#"
              className="text-decoration-none text-black fw-medium"
            >
              Privacy policy
            </NavLink>
            <NavLink
              to="#"
              className="text-decoration-none text-black fw-medium"
            >
              Disclosure
            </NavLink>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
