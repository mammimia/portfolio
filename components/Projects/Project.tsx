import React from "react";
import { motion } from "framer-motion";
import { REACT_LOGO, REACT_LOGO_PATH } from "../../constants/TechnologyLogoPaths";
import PageTitle from "../Common/PageTitle";
import Image from "next/image";

type Props = {
  imgUrl: string;
  projectName: string;
  projectIndex: number;
  totalProjectNumber: number;
};

function Project({ imgUrl, projectName, projectIndex, totalProjectNumber }: Props) {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center px-20 md:px-44 md:h-[calc(100vh_-_20rem)] h-screenh-[calc(100vh_-_5rem)]">
      <motion.img
        initial={{ y: -300, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        src={imgUrl}
        alt=""
        height={300}
        width={400}
      />
      <div className="space-y-10 px-0 md:px-10 max-w-6xl">
        <h4 className="text-4xl font-semibold text-center">
          <span className="underline decoration-[#F7AB0A]/50">
            Case Study {projectIndex} of {totalProjectNumber}: {projectName}
          </span>
        </h4>

        <div className="flex items-center space-x-2 justify-center">
          <Image height={35} width={35} src={REACT_LOGO} alt="" />
          <Image height={35} width={35} src={REACT_LOGO} alt="" />
          <Image height={35} width={35} src={REACT_LOGO} alt="" />
          <Image height={35} width={35} src={REACT_LOGO} alt="" />
        </div>

        <p className="text-lg text-center md:text-left">
          Maecenas ut semper arcu, non hendrerit urna. Etiam porttitor aliquet mauris, a aliquet purus tristique ut.
          Cras consectetur velit ipsum, eget facilisis mi vestibulum vitae. Maecenas et condimentum ligula. Morbi
          interdum nisl id ipsum ullamcorper, a semper orci cursus. Ut non nisl orci.
        </p>
      </div>
    </div>
  );
}

export default Project;
