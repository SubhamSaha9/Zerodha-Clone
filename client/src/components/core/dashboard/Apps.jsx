import React from "react";
import CardComponent from "./Card";

import { data } from "../../../data/data";

const Apps = () => {
  return (
    <div className="">
      <h1>Services</h1>
      <div className="row">
        {data.map((cardData, i) => (
          <div className="col-4 my-3">
            <CardComponent cardData={cardData} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;
