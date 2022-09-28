import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
      <motion.img
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[500px]"
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        src="https://pps.whatsapp.net/v/t61.24694-24/158079383_268114754972725_8449800354676983179_n.jpg?ccb=11-4&oh=01_AVx4IhqCrpdExqQSDc4xnMmEALzMPva93aOF3zpoDMYXaA&oe=633973BA"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a <span className="underline decoration-[#F7AB0A]/50">little</span> background
        </h4>
        <p className="text-base">
          Aliquam ut magna massa. Phasellus odio metus, tincidunt sed euismod in, venenatis id felis. Pellentesque
          pellentesque at erat non bibendum. Sed varius odio orci, sed iaculis nulla pharetra eu. Praesent id arcu
          massa. Cras non congue quam. Quisque venenatis massa non est ornare, eu tincidunt urna lacinia. Suspendisse
          viverra ipsum justo, sit amet tempus nulla rutrum vel. Donec pellentesque tellus tortor, nec pellentesque leo
          blandit id. Praesent rhoncus lacus ut tellus tristique fermentum at id est. Fusce rhoncus lacus justo, id
          condimentum velit mollis vel.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
