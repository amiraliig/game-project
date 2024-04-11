import React, { useEffect, useState } from "react";
import LogoLight from "./../assets/Images/Logo2.png";
import LogoDark from "./../assets/Images/Logo.png";
import { MdAccountCircle } from "react-icons/md";
import { HiOutlineSearch, HiMoon, HiOutlineSun } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
export const Header = () => {
  const [dark, setDark] = useState(localStorage.getItem("darkMode") === "true");
  const navigate = useNavigate();
  const darkHandler = () => {
    setDark(!dark);
  };
  useEffect(() => {
    if (dark) {
      localStorage.setItem("darkMode", "true");
      document.body.classList.add("dark");
    } else if (dark === false) {
      localStorage.setItem("darkMode", "false");
      document.body.classList.remove("dark");
    } else {
      setDark(localStorage.getItem("darkMode" === "true"));
    }
  }, [dark]);
  return (
    <div className="flex items-center p-2 justify-around  mx-auto m-0  dark:text-white py-6 cursor-pointer">
      {dark ? (
        <img
          src={LogoDark}
          alt="Logo"
          width={50}
          height={50}
          className="mx-2"
          onClick={() => {
            navigate("/");
          }}
        />
      ) : (
        <img
          src={LogoLight}
          alt="Logo"
          width={50}
          height={50}
          className="mx-2"
          onClick={() => {
            navigate("/");
          }}
        />
      )}

      <div className="flex  bg-[#9b9b9b41] rounded-full items-center w-4/6 lg-max:h-[30px] ">
        <HiOutlineSearch className="cursor-pointer scale-125 mx-2 text-slate-100" />
        <input
          type="text"
          name=""
          id=""
          className="outline-none border-solid bg-transparent w-full px-2 text-slate-100 lg-max:h-2 p-2"
          placeholder="Search Games"
        />
      </div>
      <div className="lg:hidden mx-1">
        <MdAccountCircle className="text-[35px]" />
      </div>
      <div className="p-2 lg lg-max:hidden">
        <a
          href=""
          className="hover:underline decoration-slate-400 p-2 underline-offset-8 transform text-based font-bold"
        >
          LOG IN
        </a>
        <a
          href=""
          className="hover:underline decoration-slate-400 p-2 underline-offset-8 transform text-based font-bold "
        >
          SIGN UP
        </a>
      </div>
      <div
        className="flex content-center mx-2 p-2 lg-max:hidden"
        onClick={() => darkHandler()}
      >
        {dark ? (
          <HiMoon className="text-[35px] bg-slate-200 rounded-full p-1 text-slate-700 cursor-pointer" />
        ) : (
          <HiOutlineSun className="text-[35px] bg-slate-200 rounded-full p-1 cursor-pointer text-slate-700" />
        )}
      </div>
    </div>
  );
};
