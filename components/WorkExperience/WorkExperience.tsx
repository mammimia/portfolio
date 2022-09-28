import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import * as paths from "../../constants/TechnologyLogoPaths";

type Props = {};

const workExperiences = [
  {
    companyImageUrl: "/assets/images/tai-logo.png",
    companyName: "Turkish Aerospace Industries",
    title: "Candidate Software Developer",
    startDate: "Nov 2018",
    endDate: "Aug 2019",
    details: [
      "In the last year of my bachelor degree, I worked as a candidate engineer.",
      "I had the opportunity to work on applications using Spring Boot, MongoDB and ELK stack.",
      "I prepared and published a document about the ELK stack on Github.",
    ],
    skillLogoPaths: [paths.SPRING_BOOT_LOGO_PATH, paths.MONGODB_LOGO_PATH], // need ELK Stack logo here
  },
  {
    companyImageUrl: "/assets/images/tai-logo.png",
    companyName: "Turkish Aerospace Industries",
    title: "Software Developer",
    startDate: "Jul 2019",
    endDate: "Apr 2020",
    details: [
      "After a successful candidate engineering period, I started working as a full time developer.",
      "I took part in the transition of existing monolith backend projects to microservice architecture with Spring Boot.",
      "I also had the chance to work on the migration of existing Java Swing frontend projects to ReactJS application.",
    ],
    skillLogoPaths: [
      paths.REACT_LOGO_PATH,
      paths.SPRING_BOOT_LOGO_PATH,
      paths.MONGODB_LOGO_PATH,
      paths.RABBITMQ_LOGO_PATH,
    ],
  },
  {
    companyImageUrl: "/assets/images/d14-logo.png",
    companyName: "D14.ai",
    title: "Full Stack Developer",
    startDate: "Apr 2020",
    endDate: "",
    details: [
      "I worked from scratch to the entire software development lifecycle of an AI-powered smart clinic management system.",
      "I also had a chance to work on entire software development lifecycle of an generic AI-powered smart clinic management system which is using by 4 clients now.",
      "At the same time, I developed the reporting infrastructure that enables the creation of health-related and financial reports of these projects with JasperReports.",
    ],
    skillLogoPaths: [
      paths.REACT_LOGO_PATH,
      paths.SPRING_BOOT_LOGO_PATH,
      paths.POSTGRESQL_LOGO_PATH,
      paths.SCSS_LOGO_PATH,
    ],
  },
].reverse();

function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left 
      md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3
        className="absolute top-24 uppercase tracking-[20px] text-gray-500
       text-2xl"
      >
        Experience
      </h3>

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
