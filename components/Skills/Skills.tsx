import React from "react";
import Skill from "./Skill";
import * as paths from "../../constants/TechnologyLogoPaths";
import PageTitle from "../Common/PageTitle";

type Props = {};

function Skills({}: Props) {
  return (
    <div className="flex relative flex-col text-center md:text-left max-w-[2000px] xl:px-10 justify-center mx-auto items-center mb-20 md:mb-30">
      <PageTitle title="Skills" />
      <h3 className="uppercase tracking-[3px] text-gray-500 text-sm mt-5">
        Hover over a skill for currenct proficiency
      </h3>
      <div className="grid md:grid-cols-4 xs:grid-cols-3 grid-cols-2 gap-5 mt-10">
        <Skill logoPath={paths.JAVA_LOGO_PATH} coverage={90} />
        <Skill logoPath={paths.JS_LOGO_PATH} coverage={90} coverImage />
        <Skill logoPath={paths.REACT_LOGO_PATH} coverage={95} />
        <Skill logoPath={paths.SPRING_BOOT_LOGO_PATH} coverage={80} />
        <Skill logoPath={paths.POSTGRESQL_LOGO_PATH} coverage={80} />
        <Skill logoPath={paths.MONGODB_LOGO_PATH} coverage={65} />
        <Skill logoPath={paths.TS_LOGO_PATH} coverage={65} />
        <Skill logoPath={paths.NEXTJS_LOGO_PATH} coverage={50} coverImage />
        <Skill logoPath={paths.TAILWIND_LOGO_PATH} coverage={60} />
        <Skill logoPath={paths.SCSS_LOGO_PATH} coverage={80} coverImage />
        <Skill logoPath={paths.RABBITMQ_LOGO_PATH} coverage={65} />
        <Skill logoPath={paths.FIREBASE_LOGO_PATH} coverage={65} />
        <Skill logoPath={paths.JASPER_LOGO_PATH} coverage={75} />
      </div>
    </div>
  );
}

export default Skills;
