import * as logos from "../../constants/TechnologyLogoPaths";
import taiLogo from "../../public/assets/images/tai-logo.png";
import d14Logo from "../../public/assets/images/d14-logo.png";

export const workExperiences = [
  {
    companyImageUrl: taiLogo,
    companyName: "Turkish Aerospace Industries",
    title: "Candidate Software Developer",
    startDate: "Nov 2018",
    endDate: "Aug 2019",
    details: [
      "In the last year of my bachelor degree, I worked as a candidate engineer.",
      "I had the opportunity to work on applications using Spring Boot, MongoDB and ELK stack.",
      "I prepared and published a document about the ELK stack on Github.",
    ],
    skillLogos: [logos.SPRING_BOOT_LOGO, logos.MONGODB_LOGO], // need ELK Stack logo here
  },
  {
    companyImageUrl: taiLogo,
    companyName: "Turkish Aerospace Industries",
    title: "Software Developer",
    startDate: "Jul 2019",
    endDate: "Apr 2020",
    details: [
      "After a successful candidate engineering period, I started working as a full time developer.",
      "I took part in the transition of existing monolith backend projects to microservice architecture with Spring Boot.",
      "I also had the chance to work on the migration of existing Java Swing frontend projects to ReactJS application.",
    ],
    skillLogos: [logos.REACT_LOGO, logos.SPRING_BOOT_LOGO, logos.MONGODB_LOGO, logos.RABBITMQ_LOGO],
  },
  {
    companyImageUrl: d14Logo,
    companyName: "D14.ai",
    title: "Full Stack Developer",
    startDate: "Apr 2020",
    endDate: "",
    details: [
      "I worked from scratch to the entire software development lifecycle of an AI-powered smart clinic management system.",
      "I also had a chance to work on entire software development lifecycle of an generic AI-powered smart clinic management system which is using by 4 clients now.",
      "At the same time, I developed the reporting infrastructure that enables the creation of health-related and financial reports of these projects with JasperReports.",
    ],
    skillLogos: [logos.REACT_LOGO, logos.SPRING_BOOT_LOGO, logos.POSTGRESQL_LOGO, logos.SCSS_LOGO],
  },
].reverse();
