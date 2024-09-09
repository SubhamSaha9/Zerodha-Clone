import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI </p>
        <Link className="dash-btn btn-green">Add funds</Link>
        <Link className="dash-btn btn-blue">Withdraw</Link>
      </div>

      <div className="dash-row">
        <div className="dash-col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="funds-data">
              <p>Available margin</p>
              <p className="imp colored">4,043.10</p>
            </div>
            <div className="funds-data">
              <p>Used margin</p>
              <p className="imp">3,757.30</p>
            </div>
            <div className="funds-data">
              <p>Available cash</p>
              <p className="imp">4,043.10</p>
            </div>
            <hr />
            <div className="funds-data">
              <p>Opening Balance</p>
              <p>4,043.10</p>
            </div>
            <div className="funds-data">
              <p>Opening Balance</p>
              <p>3736.40</p>
            </div>
            <div className="funds-data">
              <p>Payin</p>
              <p>4064.00</p>
            </div>
            <div className="funds-data">
              <p>SPAN</p>
              <p>0.00</p>
            </div>
            <div className="funds-data">
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className="funds-data">
              <p>Exposure</p>
              <p>0.00</p>
            </div>
            <div className="funds-data">
              <p>Options premium</p>
              <p>0.00</p>
            </div>
            <hr />
            <div className="funds-data">
              <p>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>
            <div className="funds-data">
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>
            <div className="funds-data">
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        <div className="dash-col">
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <Link className="dash-btn btn-blue">Open Account</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
