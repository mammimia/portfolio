import React from "react";
import { motion } from "framer-motion";
import { REACT_LOGO } from "../../constants/TechnologyLogoPaths";
import PageTitle from "../Common/PageTitle";
import Image from "next/image";
import { COMPILER_INDEXES } from "next/dist/shared/lib/constants";

type Props = {
  imgUrl: string;
  imgClassName?: string;
  projectName: string;
  projectIndex: number;
  totalProjectNumber: number;
  description: string;
  skillLogos: any;
  moreInformationLink?: string;
  liveLink?: string;
};

function Project({
  imgUrl,
  imgClassName,
  projectName,
  projectIndex,
  totalProjectNumber,
  description,
  skillLogos,
  moreInformationLink,
  liveLink,
}: Props) {
  console.log(moreInformationLink);
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center px-20 md:px-44 md:h-[calc(100vh_-_20rem)] h-[calc(100vh_-_5rem)">
      <img className={imgClassName || ""} src={imgUrl} alt="" height={225} width={300} />
      <div className="space-y-10 px-0 md:px-10 max-w-6xl">
        <h4 className="text-4xl font-semibold text-center">
          <span className="underline decoration-[#F7AB0A]/50">
            Case Study {projectIndex} of {totalProjectNumber}: {projectName}
          </span>
        </h4>

        <div className="flex items-center space-x-2 justify-center">
          {skillLogos?.map((logo: any, index: number) => {
            return (
              <img
                key={projectName + "-skill-" + index}
                className="h-10 w-10"
                height={35}
                width={35}
                src={logo.src}
                alt=""
              />
            );
          })}
        </div>

        <p className="text-lg text-center md:text-left">{description}</p>

        <div className="flex justify-center mb-5">
          {moreInformationLink && (
            <a
              href={moreInformationLink}
              target="_blank"
              className="bg-[#F7AB0A] opacity-80 text-gray-700 hover:text-gray-500
           hover:opacity-100 py-2 px-5 rounded-md font-bold text-sm cursor-pointer"
              rel="noreferrer"
            >
              More Information
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              className="bg-[#F7AB0A] opacity-80 text-gray-700 hover:text-gray-500
           hover:opacity-100 py-2 px-5 rounded-md font-bold text-sm cursor-pointer"
              rel="noreferrer"
            >
              Live Link
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
