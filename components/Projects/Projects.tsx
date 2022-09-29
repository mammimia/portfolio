import React from "react";
import Project from "./Project";
import { motion } from "framer-motion";
import PageTitle from "../Common/PageTitle";

type Props = {};

function Projects({}: Props) {
  const projects = [
    {
      imgUrl: "https://images.firstpost.com/wp-content/uploads/2021/08/twitter-redesign1280.jpg",
      projectName: "Twitter Clone",
    },
    {
      imgUrl: "https://images.firstpost.com/wp-content/uploads/2021/08/twitter-redesign1280.jpg",
      projectName: "Twitter Clone 2",
    },
    {
      imgUrl: "https://images.firstpost.com/wp-content/uploads/2021/08/twitter-redesign1280.jpg",
      projectName: "Twitter Clone 3",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left
      max-w-full justify-evenly mx-auto items-center z-0"
    >
      <PageTitle title="Projects" />
      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden
       snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20
        scrollbar-thumb-[#F7AB0A]/80"
      >
        {projects.map((project, i) => (
          <Project
            key={project.projectName}
            imgUrl={project.imgUrl}
            projectName={project.projectName}
            projectIndex={i + 1}
            totalProjectNumber={projects.length}
          />
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
