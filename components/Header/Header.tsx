import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        <SocialIcon url="https://www.linkedin.com/in/muhammed-ali-aydin/" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="https://github.com/mammimia" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="https://twitter.com/mammimia97" fgColor="gray" bgColor="transparent" />
        <SocialIcon
          style={{ height: "30px", width: "30px", marginLeft: "10px" }}
          url="https://www.upwork.com/freelancers/~01e07a20de5d5368f0"
          fgColor="transparent"
          bgColor="gray"
        />
      </motion.div>
      <Link href="#contact">
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          <SocialIcon className="cursor-pointer" network="email" fgColor="gray" bgColor="transparent" />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get In Touch</p>
        </motion.div>
      </Link>
    </header>
  );
}

export default Header;
