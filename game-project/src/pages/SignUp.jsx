import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ValidSignup from "../pages/ValidSignup";
import axios from "axios";
const SignUp = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [err, setErr] = useState({ email: "" });
  const userValueHandler = (event) => {
    setUser((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  const inputHandler = (event) => {
    event.preventDefault();
    console.log(err);
    setErr(ValidSignup(user));
    console.log(user)
  };

  useEffect(() => {
    Object.keys(err).length == 0 ? sendData() : null;
  });
  const sendData = () => {};
  return (
    <div className="flex items-center justify-center h-fit">
      <div className="lg:w-5/12 m-auto  shadow-xl rounded-lg  p-0 my-10 grid ">
        <h1 className="text-center text-4xl font-bold">Sign-up</h1>
        <h3 className="text-center text-slate-500 m-3 mb-7">
          Create your account
        </h3>
        <form
          action=""
          className="grid justify-center items-center grid-cols-1 lg:grid-cols-2 p-3"
          onSubmit={inputHandler}
        >
          <input
            onChange={userValueHandler}
            name="firstname"
            type="text"
            placeholder="FIRSTNAME"
            className="outline-none py-2 p-1 bg-blue-100  rounded-lg text-lg m-3"
          />
          <input
            onChange={userValueHandler}
            name="lastname"
            type="text"
            placeholder="LASTNAME"
            className="outline-none py-2 p-1 bg-blue-100  rounded-lg text-lg m-3"
          />
          {err.name && (
            <span className="text-red-600 text-center lg:col-span-2">
              {err.name}
            </span>
          )}
          <input
            onChange={userValueHandler}
            name="email"
            type="gmail"
            placeholder="EMAIL"
            className="outline-none py-2 p-1 bg-blue-100  rounded-lg text-lg lg:col-span-2 m-3"
          />
          {err.email && (
            <span className="text-red-600 text-center lg:col-span-2">
              {err.email}
            </span>
          )}
          <input
            onChange={userValueHandler}
            name="password"
            type="password"
            placeholder="PASSWORD"
            className="outline-none py-2 p-1 bg-blue-100  rounded-lg text-lg lg:col-span-2 m-3"
          />
          {err.password && (
            <span className="text-red-600 text-center lg:col-span-2">
              {err.password}
            </span>
          )}
          <input
            onChange={userValueHandler}
            name="confirmPassword"
            type="password"
            placeholder="CINFIRM PASSWORD"
            className="outline-none py-2 p-1 bg-blue-100  rounded-lg text-lg  lg:col-span-2 m-3"
          />
          {err.confirmPassword && (
            <span className="text-red-600 text-center lg:col-span-2">
              {err.confirmPassword}
            </span>
          )}
          <button
            type="submit"
            className=" bg-blue-500 py-2 px-4 rounded-full  text-white font-bold m-4 lg:col-span-2"
          >
            SIGN IN{" "}
          </button>
          <p className="m-2 lg:col-span-2 text-center">
            If you have an account, please
            <Link
              to={`/login`}
              className="text-blue-500 outline-b underline decoration-blue-500"
            >
              {" "}
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
