import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setUser, setToken } from "../../../slices/authSlice";
import toast from "react-hot-toast";
import axios from "axios";

const URL = process.env.REACT_APP_BASE_URL;

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitLoginForm = async (data) => {
    const toastId = toast.loading("Loading...");
    try {
      const result = await axios.post(`${URL}/login`, data);
      if (!result.data.success) {
        throw new Error(result.data.message);
      }

      toast.success("Login Successful");
      dispatch(setToken(result.data.token));
      dispatch(setUser(result.data.user));
      localStorage.setItem("token", JSON.stringify(result.data.token));
      localStorage.setItem("user", JSON.stringify(result.data.user));
      toast.dismiss(toastId);
      navigate("/user/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Login failed");
      toast.dismiss(toastId);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        password: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <div>
      <h1 className="fs-2 py-2 mb-1">LogIn now</h1>
      <h3
        className="fw-normal pb-3"
        style={{ fontSize: "1.1rem", color: "#9B9B9B" }}
      >
        Or create new account.
      </h3>
      <form onSubmit={handleSubmit(submitLoginForm)}>
        <div className="row mt-3">
          <div className="">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="fs-6 text-danger mt-1">
                Please enter your email.
              </span>
            )}
          </div>
        </div>
        <div className="row mt-3">
          <div className="">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="***************"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="mt-1 fs-6 text-danger">
                Please enter your password.
              </span>
            )}
          </div>
        </div>
        <button className="mt-3 btn btn-primary" type="submit">
          LogIn
        </button>
      </form>
    </div>
  );
};

export default Login;
