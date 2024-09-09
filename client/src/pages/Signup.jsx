import React from "react";
import SignUp from "../components/core/auth/SignUp";
import { useState } from "react";
import Login from "../components/core/auth/Login";

const Signup = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="container p-5 mb-5">
      <div className="row mt-5">
        <div className="col-5 mt-5" style={{ marginLeft: "5rem" }}>
          <img
            src="../../media/images/signup.png"
            alt="signup-logo"
            style={{ width: "110%" }}
          />
        </div>
        <div className="col-1"></div>
        <div
          className="col-5 mt-5"
          style={{ width: "350px", marginLeft: "2rem" }}
        >
          {isLogin ? <Login /> : <SignUp setIsLogin={setIsLogin} />}
          <div
            onClick={() => setIsLogin(!isLogin)}
            style={{
              color: "#0054c6",
              textDecoration: "none",
              cursor: "pointer",
            }}
            className="mt-3 px-0 fs-6 fw-normal"
          >
            {isLogin ? (
              <>Want to open an NRI account?</>
            ) : (
              <>Already have an account? Sign In</>
            )}
          </div>
        </div>
      </div>
      <div className="row mt-5 text-center">
        <p style={{ color: "#9B9B9B", fontSize: "12px" }}>
          I authorise Zerodha to contact me even if my number is registered on
          DND. I authorise Zerodha to fetch my KYC information from the C-KYC
          registry with my PAN. <br /> Please visit this article to know more.
        </p>
        <p style={{ color: "#9B9B9B", fontSize: "12px" }}>
          If you are looking to open a HUF, Corporate, Partnership, or NRI
          account, you have to use the{" "}
          <span style={{ color: "#0054c6" }}>offline forms</span>. For help,
          <span style={{ color: "#0054c6" }}>click here</span>.
        </p>
      </div>
    </div>
  );
};

export default Signup;
