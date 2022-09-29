import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { workExperiences } from "./ExperienceData";
import PageTitle from "../Common/PageTitle";

type Props = {};

function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <PageTitle title="Experience" />

      <div
        className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x
      scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
      >
        {workExperiences.map((experience) => (
          <ExperienceCard
            key={experience.startDate}
            companyImageUrl={experience.companyImageUrl}
            companyName={experience.companyName}
            title={experience.title}
            startDate={experience.startDate}
            endDate={experience.endDate}
            details={experience.details}
            skillLogoPaths={experience.skillLogoPaths}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
