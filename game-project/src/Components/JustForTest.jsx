import React from "react";
import { useNavigate } from "react-router-dom";

export const JustForTest = () => {
  const navigate = useNavigate();
  return <div className="text-white" onClick={() => {navigate('/other-page',{replace:true})}}>JustForTest</div>;
};
