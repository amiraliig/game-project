import React, { useEffect } from "react";

export const Banner = ({ gameBanner }) => {
  useEffect(() => {
    console.log(gameBanner);
  });
  return (
    <div>
      <img src={gameBanner.background_image} />
    </div>
  );
};
