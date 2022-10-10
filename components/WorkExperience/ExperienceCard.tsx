import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  companyImageUrl: any;
  companyName: string;
  title: string;
  startDate: string;
  endDate?: string;
  details: Array<string>;
  skillLogos: Array<any>;
};

function ExperienceCard({ companyImageUrl, companyName, title, startDate, endDate, details, skillLogos }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
      w-[300px] sm:w-[400px] md:w-[500px] xl:w-[800px] snap-center bg-[#292929]
      p-5 hover:opacity-100 opacity-40 cursor-pointer transistion-opacity
      duration-200 overflow-hidden overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80"
    >
      <img
        className="w-32 h-32 rounded-full xl:w-[128px] xl:h-[128px] object-cover object-center"
        src={companyImageUrl.src}
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-xl sm:text-3xl font-light">{companyName}</h4>
        <p className="font-bold text-lg sm:text-2xl mt-1">{title}</p>
        <div className="flex space-x-1 sm:space-x-2 my-2">
          {skillLogos?.map((skillLogo, index) => {
            return (
              <img
                key={index + "skill" + startDate}
                className="h-8 w-8 sm:h-10 sm:w-10 rounded-full"
                src={skillLogo.src}
                alt=""
              />
            );
          })}
        </div>
        <p className="text-sm sm:text-base uppercase py-5 text-gray-300">
          Started work {startDate} - {endDate?.length != 0 ? "Ended " + endDate : "Current"}
        </p>
        <ul className="list-disc space-y-4 ml-5 pr-10 text-sm sm:text-md h-48">
          {details.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
