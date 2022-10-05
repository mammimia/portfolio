import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import profilePic from "../../public/assets/pics/MuhammedAliAYDIN.jpg";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hey, I'm Muhammed Ali AYDIN",
      "<OneOfTheMostAmbitiousMenYouCanKnow />",
      "Guy-who-is-obsessed-with-Coffee.tsx",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img className="relative rounded-full h-32 w-32 mx-auto object-cover" src={profilePic.src} alt="" />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[12px]">Full Stack Developer</h2>
        <h1 className="text-5xl lg:6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="$F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="hero-button">About</button>
          </Link>
          <Link href="#experience">
            <button className="hero-button">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="hero-button">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="hero-button">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
