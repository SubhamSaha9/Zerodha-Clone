import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container border-bottom mb-5" style={{ marginTop: "7rem" }}>
      <div className="text-center mt-5 p-3">
        <h1>Technology</h1>
        <h3 className="text-muted mt-3 fs-4">
          Sleek, modern and intuitive trading platforms
        </h3>
        <p className="mt-3 mb-5">
          Check out our{" "}
          <NavLink to="/" style={{ textDecoration: "none" }}>
            investment offerings <FaLongArrowAltRight />
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Hero;
