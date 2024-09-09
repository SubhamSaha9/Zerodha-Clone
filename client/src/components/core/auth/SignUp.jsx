import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const URL = process.env.REACT_APP_BASE_URL;

const SignUp = ({ setIsLogin }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitSignupForm = async (data) => {
    const toastId = toast.loading("Loading...");
    try {
      const result = await axios.post(`${URL}/signup`, data);
      if (!result.data.success) {
        throw new Error(result.data.message);
      }

      toast.success("Signup Successful");
      toast.dismiss(toastId);
      setIsLogin(true);
    } catch (error) {
      console.log(error);
      toast.error("signup failed");
      toast.dismiss(toastId);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <div>
      <h1 className="fs-2 py-2 mb-1">SignUp now</h1>
      <h3
        className="fw-normal pb-3"
        style={{ fontSize: "1.1rem", color: "#9B9B9B" }}
      >
        Or track your existing application.
      </h3>
      <form onSubmit={handleSubmit(submitSignupForm)}>
        <div className="d-flex gap-3">
          <div className="">
            <label htmlFor="firstname" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              name="firstname"
              placeholder="enter firstname"
              style={{ width: "10rem" }}
              {...register("firstname", { required: true })}
            />
            {errors.firstname && (
              <span className="mt-1 fs-6 text-danger">
                Please enter your first name.
              </span>
            )}
          </div>
          <div className="">
            <label htmlFor="lastname" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              name="lastname"
              placeholder="enter lastname"
              style={{ width: "10.5rem" }}
              {...register("lastname", { required: true })}
            />
            {errors.lastname && (
              <span className="mt-1 fs-6 text-danger">
                Please enter your last name.
              </span>
            )}
          </div>
        </div>
        <div className="row mt-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="text"
            className="form-control mx-2"
            id="email"
            name="email"
            placeholder="enter email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="mt-1 fs-6 text-danger">
              Please enter your email.
            </span>
          )}
        </div>
        <div className="row mt-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control mx-2"
            id="password"
            name="password"
            placeholder="enter password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="mt-1 fs-6 text-danger">
              Please enter your password.
            </span>
          )}
          <p style={{ color: "#9B9B9B" }} className="mt-3 px-0 mx-2">
            You will receive an OTP on provided email
          </p>
        </div>
        <button className="btn btn-primary" type="submit">
          SignUp
        </button>
      </form>
    </div>
  );
};

export default SignUp;
