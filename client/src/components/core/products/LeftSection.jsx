import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const LeftSection = ({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} alt="img" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <NavLink to={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo <FaLongArrowAltRight />
            </NavLink>
            <NavLink
              to={learnMore}
              style={{ marginLeft: "50px", textDecoration: "none" }}
            >
              Learn More <FaLongArrowAltRight />
            </NavLink>
          </div>
          <div className="mt-3">
            <NavLink to={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="googlePlay" />
            </NavLink>
            <NavLink to={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="appStore"
                style={{ marginLeft: "50px" }}
              />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
