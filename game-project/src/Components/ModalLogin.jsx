import React from "react";
import { useEffect, useState } from "react";
export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
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
    <>
      <button
        className="hover:underline decoration-slate-400 p-2 underline-offset-8 transform text-based font-bold"
        type="button"
        onClick={() => setShowModal(true)}
      >
        LOG IN
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <h3 className="text-2xl p-4 font-semibold text-black block text-center">
                  login
                </h3>
                <span className="block text-slate-500 text-center mt-3">
                  Enter your credential to Log-in
                </span>
               
                {/*body*/}
                <div className="relative p-6 flex-auto">
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
                    {err.email && (
                      <span className="text-red-600">{err.email}</span>
                    )}
                    <input
                      type="passwore"
                      placeholder="PASSWORD"
                      className="outline-none py-2 p-1 bg-blue-100 m-4 rounded-lg text-lg w-4/5"
                      name="password"
                      onChange={userValueHandler}
                    />
                    {err.password && (
                      <span className="text-red-600">{err.password}</span>
                    )}

                    <button
                      type="submit"
                      className=" bg-blue-500 py-2 px-4 rounded-full w-4/5 text-white font-bold m-4"
                    >
                      LOGIN
                    </button>

                    <p className="text-blue-600 my-5">forgot password?</p>
                    <p className="m-2 text-slate-500">
                      If you do not have an account, please register
                    </p>
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6  border-blueGray-200 rounded-b"></div>
              </div>
            </div>
          </div>
          <div className="opacity-70 fixed inset-0 z-40 bg-black" onClick={()=> setShowModal(false)}></div>
        </>
      ) : null}
    </>
  );
}
