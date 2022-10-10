import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  directionLeft?: boolean;
  logo: any;
  coverage: number;
  coverImage?: boolean;
};

function Skill({ directionLeft, logo, coverage, coverImage }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <img
        className={`rounded-full border border-gray-500 h-24 w-24 md:w-28 md:h-28
         xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out${
           coverImage ? " object-cover" : ""
         }`}
        src={logo.src}
        alt=""
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 
      ease-in-out group-hover:bg-black h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 
      rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-white opacity-100">{coverage}%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
