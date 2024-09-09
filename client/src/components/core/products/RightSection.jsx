import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const RightSection = ({
  imageURL,
  productName,
  productDesription,
  learnMore,
}) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <Link to={learnMore} style={{ textDecoration: "none" }}>
              Learn More <FaLongArrowAltRight />
            </Link>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURL} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
