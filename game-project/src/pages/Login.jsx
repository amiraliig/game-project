import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ValidLogin from "./ValidLogin";

const Login = () => {
  useEffect(() => {});
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState("");
  const userValueHandler = (event) => {
    setUser((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  const inputHandler = (event) => {
    event.preventDefault();
    console.log(user);
    setErr(ValidLogin(user));
  };
  return (
    <div className="flex items-center justify-center h-fit">
      <div className="lg:w-5/12 m-auto  shadow-xl rounded-lg p-2 my-10 ">
        <h1 className="text-center text-4xl font-bold">Welcome Back</h1>
        <h3 className="text-center text-slate-500 m-3 mb-7">
          Enter your credential to Log-in
        </h3>
        <form
          action=""
          className="flex flex-col items-center"
          onSubmit={inputHandler}
        >
          <input
            type="gmail"
            placeholder="EMAIL"
            className="outline-none py-2 p-1 bg-blue-100 m-4 rounded-lg text-lg w-4/5"  
            name="email"
            onChange={userValueHandler}
          />
          {err.email && <span className="text-red-600">{err.email}</span>}
          <input
            type="passwore"
            placeholder="PASSWORD"
            className="outline-none py-2 p-1 bg-blue-100 m-4 rounded-lg text-lg w-4/5"
            name="password"
            onChange={userValueHandler}
          />
          {err.password && <span className="text-red-600">{err.password}</span>}

          <button
            type="submit"
            className=" bg-blue-500 py-2 px-4 rounded-full w-4/5 text-white font-bold m-4"
          >
            LOGIN
          </button>

          <p className="text-blue-600 my-10">forgot password?</p>
          <p className="m-2 ">
            If you do not have an account, please
            <Link
              to={`/signup`}
              className="text-blue-500 outline-b underline decoration-blue-500"
            >
              {" "}
              register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
