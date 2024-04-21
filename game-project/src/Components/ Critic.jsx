import React from "react";

const Critic = ({ certicScore }) => {
  let colorSocore = certicScore > 75 ? 'text-green-400': certicScore >60 ? 'text-yellow-400' : ""
  return <div className={`${colorSocore} px-2 rounded-md bg-slate-700 h-6`}>{certicScore}</div>;
};

export default Critic;
