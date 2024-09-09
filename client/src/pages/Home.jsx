import React from "react";
import Hero from "../components/core/home/Hero";
import Awards from "../components/core/home/Awards";
import Stats from "../components/core/home/Stats";
import Pricing from "../components/core/home/Pricing";
import Education from "../components/core/home/Education";
import OpenAccount from "../components/common/OpenAccount";

const Home = () => {
  return (
    <div>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </div>
  );
};

export default Home;
