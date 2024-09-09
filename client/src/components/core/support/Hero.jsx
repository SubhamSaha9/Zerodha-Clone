import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <Link to="/">Track Tickets</Link>
      </div>
      <div className="row" id="features">
        <div className="col-7 p-3">
          <h2 className="fs-4 fw-normal pb-4">
            Search for an answer or browse help topics to create a ticket
          </h2>
          <input placeholder="Eg. how do I activate F&O" />
          <br />
          <br />
          <Link to="/">Track account opening</Link> &nbsp;&nbsp;
          <Link to="/">Track segment activation</Link> &nbsp;&nbsp;
          <Link to="/">Intraday margins</Link>&nbsp;&nbsp;
          <Link to="/">Kite user manual</Link>
        </div>
        <div className="col-5 p-3">
          <h2 className="fs-4 fw-normal">Featured</h2>
          <ol>
            <li>
              <Link to="/" className="fw-medium">
                Current Takeovers and Delisting - January 2024
              </Link>
            </li>
            <br />
            <li>
              <Link to="/" className="fw-medium">
                Latest Intraday leverages - MIS & CO
              </Link>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Hero;
