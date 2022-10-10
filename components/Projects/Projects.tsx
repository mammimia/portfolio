import React from "react";
import Project from "./Project";
import { motion } from "framer-motion";
import PageTitle from "../Common/PageTitle";
import { projects } from "./ProjectsData";

type Props = {};

function Projects({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex overflow-hidden flex-col text-left
      max-w-full mx-auto items-center z-0"
    >
      <PageTitle title="Projects" />
      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden
       snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20
        scrollbar-thumb-[#F7AB0A]/80 py-10 md:py-20"
      >
        {projects.map((project, i) => (
          <Project
            key={project.projectName}
            projectIndex={i + 1}
            totalProjectNumber={projects.length}
            imgUrl={project.imgUrl}
            imgClassName={project.imgClassName}
            projectName={project.projectName}
            description={project.description}
            skillLogos={project.skillLogos}
            moreInformationLink={project.moreInformationLink}
            liveLink={project.liveLink}
            sourceCodeLink={project.sourceCodeLink}
          />
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
