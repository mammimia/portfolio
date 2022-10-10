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
        <Skill logo={paths.JS_LOGO} coverage={90} />
        <Skill logo={paths.HTML_LOGO} coverage={90} />
        <Skill logo={paths.CSS_LOGO} coverage={90} />
        <Skill logo={paths.REACT_LOGO} coverage={95} />
        <Skill logo={paths.TS_LOGO} coverage={65} />
        <Skill logo={paths.NEXTJS_LOGO} coverage={50} />
        <Skill logo={paths.TAILWIND_LOGO} coverage={60} />
        <Skill logo={paths.SCSS_LOGO} coverage={80} />
        <Skill logo={paths.MATERIAL_UI_LOGO} coverage={80} />
        <Skill logo={paths.BOOTSTRAP_LOOG} coverage={80} />
        <Skill logo={paths.SPRING_BOOT_LOGO} coverage={80} />
        <Skill logo={paths.JAVA_LOGO} coverage={90} />
        <Skill logo={paths.POSTGRESQL_LOGO} coverage={80} />
        <Skill logo={paths.MONGODB_LOGO} coverage={65} />
        <Skill logo={paths.RABBITMQ_LOGO} coverage={65} />
        <Skill logo={paths.FIREBASE_LOGO} coverage={65} />
        <Skill logo={paths.JASPER_LOGO} coverage={75} />
      </div>
    </div>
  );
}

export default Skills;
