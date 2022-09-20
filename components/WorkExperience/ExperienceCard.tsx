import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
      w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929]
      p-10 hover:opacity-100 opacity-40 cursor-pointer transistion-opacity
      duration-200 overflow-hidden overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80"
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://media-exp1.licdn.com/dms/image/C4D0BAQGuRnMUROSzzg/company-logo_200_200/0/1602491042791?e=1671667200&v=beta&t=AdSpet0s51MMc3TdLJZAhclU9H_5xrL69irNOowRFws"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO of Mammimia Co.</h4>
        <p className="font-bold text-2xl mt-1">Mammimia</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            alt=""
            src="https://pps.whatsapp.net/v/t61.24694-24/158079383_268114754972725_8449800354676983179_n.jpg?ccb=11-4&oh=01_AVx4IhqCrpdExqQSDc4xnMmEALzMPva93aOF3zpoDMYXaA&oe=633973BA"
          />
          <img
            className="h-10 w-10 rounded-full"
            alt=""
            src="https://pps.whatsapp.net/v/t61.24694-24/158079383_268114754972725_8449800354676983179_n.jpg?ccb=11-4&oh=01_AVx4IhqCrpdExqQSDc4xnMmEALzMPva93aOF3zpoDMYXaA&oe=633973BA"
          />
          <img
            className="h-10 w-10 rounded-full"
            alt=""
            src="https://pps.whatsapp.net/v/t61.24694-24/158079383_268114754972725_8449800354676983179_n.jpg?ccb=11-4&oh=01_AVx4IhqCrpdExqQSDc4xnMmEALzMPva93aOF3zpoDMYXaA&oe=633973BA"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">Started work... - Ended...</p>
        <ul className="list-disc space-y-4 ml-5 pr-10 text-lg h-96">
          <li>Proin consequat metus at pellentesque faucibus.</li>
          <li>Interdum et malesuada fames ac ante ipsum primis in faucibus.</li>
          <li>Nullam vel massa massa.</li>
          <li>Pellentesque porttitor risus tortor, at semper mauris bibendum sed</li>
          <li>Aenean quis laoreet quam</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
