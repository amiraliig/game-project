import React from "react";
import {
  FaPlaystation,
  FaAndroid,
  FaXbox,
  FaMicrosoft,
  FaLinux,
  FaApple,
  FaAppStoreIos,
} from "react-icons/fa";

import { BsNintendoSwitch } from "react-icons/bs";

import {} from "react-icons/fa6";
import { Icon } from "@chakra-ui/react";
export const PlatformIcomList = ({ platforms }) => {
  const iconObj = {
    pc: FaMicrosoft,
    playstation: FaPlaystation,
    mac: FaApple,
    xbox: FaXbox,
    android: FaAndroid,
    linux: FaLinux,
    nintendo: BsNintendoSwitch,
    ios: FaAppStoreIos,
  };
  console.log(platforms.id);
  return (
    <div className="text-white mx-2" >
      {platforms.parent_platforms.map((item) => (
        //<div key={item.id}>{item.platform.slug}</div>
        
        <Icon as={iconObj[item.platform.slug]} className="mx-1"/>
      ))}
    </div>
  );
};
