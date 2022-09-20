import React from "react";
import { motion } from "framer-motion";

type Props = {
  companyImageUrl: string;
  companyName: string;
  title: string;
  startDate: string;
  endDate?: string;
  details: Array<string>;
  skillLogoPaths: Array<string>;
};

function ExperienceCard({ companyImageUrl, companyName, title, startDate, endDate, details, skillLogoPaths }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
      w-[400px] md:w-[500px] xl:w-[800px] snap-center bg-[#292929]
      p-5 hover:opacity-100 opacity-40 cursor-pointer transistion-opacity
      duration-200 overflow-hidden overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80"
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[128px] xl:h-[128px] object-cover object-center"
        src={companyImageUrl}
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">{companyName}</h4>
        <p className="font-bold text-2xl mt-1">{title}</p>
        <div className="flex space-x-2 my-2">
          {skillLogoPaths.map((skillLogoPath, index) => {
            return (
              <img key={index + "skill" + startDate} className="h-10 w-10 rounded-full" alt="" src={skillLogoPath} />
            );
          })}
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work {startDate} - {endDate?.length != 0 ? "Ended " + endDate : "Current"}
        </p>
        <ul className="list-disc space-y-4 ml-5 pr-10 text-md h-48">
          {details.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
