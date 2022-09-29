import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import WorkExperience from "../components/WorkExperience/WorkExperience";
import { HomeIcon } from "@heroicons/react/24/solid";

const Home: NextPage = () => {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen overflow-scroll z-0
       overflow-x-hidden scrollbar scrollbar-track-gray-400/20
      scrollbar-thumb-[#F7AB0A]/80"
    >
      <Head>
        <title>Mammimia Portfolio</title>
      </Head>

      <Header />

      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="experience">
        <WorkExperience />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <HomeIcon
              className="h-10 w-10 rounded-full filter text-gray-500
             hover:text-[#F7AB0A] cursor-pointer"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
