import React from "react";
import { motion } from "framer-motion";
import PageTitle from "../Common/PageTitle";
import widerPic from "../../public/assets/pics/MuhammedAliAYDIN-2.jpg";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative text-center md:text-left md:flex-row max-w-7xl p-10 justify-evenly mx-auto items-center"
    >
      <PageTitle title="About" />
      <div className="md:flex py-10 md:py-20">
        <motion.img
          className="flex-shrink-0 w-48 h-48 rounded-full sm:w-64 sm:h-64 object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[500px] mx-auto"
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          src={widerPic.src}
        />
        <div className="self-center space-y-2 xs:space-y-10 px-0 md:px-10 mt-10 md:mt-0">
          <h4 className="text-2xl sm:text-4xl font-semibold">
            Here is a <span className="underline decoration-[#F7AB0A]/50">little</span> background
          </h4>
          <p className="text-sm sm:text-base">
            I graduated from Gazi University Engineering Department with 3.68 GPA as the third in the department. In my
            last year of university, I was accepted as an candidate engineer by TAI, one of the biggest national
            security companies in Turkey. After my graduation, they offered me a full-time job, taking into account my
            successful candidacy period. Thus, I found myself in an adventure where I started to improve myself
            non-stop. I am an ambitious person who spends almost 14 hours a day in front of the computer, including
            weekends. In this way, I can spend my time constantly learning and producing something. I believe you can
            easily see this when you check this portfolio.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
