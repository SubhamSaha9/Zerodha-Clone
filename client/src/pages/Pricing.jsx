import React from "react";
import Hero from "../components/core/pricing/Hero";
import Brokerage from "../components/core/pricing/Brokerage";
import OpenAccount from "../components/common/OpenAccount";
const Pricing = () => {
  return (
    <div>
      <Hero />
      <OpenAccount />
      <Brokerage />
    </div>
  );
};

export default Pricing;
