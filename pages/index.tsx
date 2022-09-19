import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Mammimia Portfolio</title>
      </Head>

      <Header />
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      {/* Header */}
      {/* Hero */}
      {/* About */}
      {/* Experience */}
      {/* Skills */}
      {/* Projects */}
      {/* Contact */}
    </div>
  );
};

export default Home;
