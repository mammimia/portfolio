import * as logos from "../../constants/TechnologyLogoPaths";
import d14AiWebsiteLogo from "../../public/assets/images/d14-ai-website-logo.svg";
import dhealthImg from "../../public/assets/images/dhealth-img.png";
import shiftitImg from "../../public/assets/images/shiftit-img.png";
import mideumLogo from "../../public/assets/images/mideum-logo.svg";
import portfolioImg from "../../public/assets/images/portfolio-img.png";

export const projects = [
  {
    imgUrl: "https://www.disc-me.com/wp-content/uploads/2018/11/XJVztVoA.jpeg",
    projectName: "MED-AI",
    description:
      "A socially smart clinic management system project which is developed specific for Diversified Integrated Sports Clinic (DISC). " +
      "It includes appointment, patient management, staff management, ai powered scheduling, billing, EMR(Electronic medical record)," +
      " insurance and HR modules. This project has been used by the customer for over a year and maintenance support is still provided.",
    skillLogos: [logos.REACT_LOGO, logos.SPRING_BOOT_LOGO, logos.JASPER_LOGO, logos.POSTGRESQL_LOGO],
  },
  {
    imgUrl: "https://www.disc-me.com/wp-content/uploads/2018/11/XJVztVoA.jpeg",
    projectName: "DISC Website",
    description:
      "This project was developed as a website for Diversified Integrated Sports Clinic (DISC). It consists of a landing page " +
      "and the pages where the details of the two clinics are shared. There is also a patient portal in the project. Patiens can " +
      "create records and make appointments through this patient portal.",
    skillLogos: [logos.REACT_LOGO, logos.SPRING_BOOT_LOGO, logos.JASPER_LOGO, logos.POSTGRESQL_LOGO, logos.SCSS_LOGO],
  },
  {
    imgUrl: d14AiWebsiteLogo.src,
    imgClassName: "bg-white p-10 h-[150px] w-[225px]",
    projectName: "D14.ai Website",
    description:
      "I had the opportunity to work in the development of the company's website. I took part in the development of the project with HTML," +
      " CSS and JS.Then I play a role in converting this project to React and connecting it to the CMS. You can check the site from the link below.",
    liveLink: "https://www.d14.ai/",
    skillLogos: [logos.REACT_LOGO, logos.MATERIAL_UI_LOGO, logos.SCSS_LOGO],
  },
  {
    imgUrl: dhealthImg.src,
    imgClassName: "bg-white p-10 h-[150px] w-[225px]",
    projectName: "Dhealth",
    description:
      "A socially smart clinic management system project which is developed as a generic product. This project is currently using by 4 different clinics in Dubai. " +
      "It also includes appointment, patient management, staff management, ai powered scheduling, billing, EMR(Electronic medical record)," +
      " insurance and HR modules.",
    moreInformationLink: "https://www.d14.ai/dhealth",
    skillLogos: [logos.REACT_LOGO, logos.SPRING_BOOT_LOGO, logos.JASPER_LOGO, logos.POSTGRESQL_LOGO],
  },
  {
    imgUrl: shiftitImg.src,
    imgClassName: "bg-white p-10 h-[150px] w-[225px]",
    projectName: "Shiftit",
    description:
      "Shiftit is the smart platform for modern deskless workforce management and complex scheduling." +
      " Companies can create optimized schedules and rotations and assign tasks with one click.",
    moreInformationLink: "https://www.d14.ai/shiftit",
    skillLogos: [logos.REACT_LOGO, logos.SPRING_BOOT_LOGO, logos.POSTGRESQL_LOGO],
  },
  {
    imgUrl: mideumLogo.src,
    imgClassName: "bg-white p-10 h-[150px]",
    projectName: "MIDEUM",
    description:
      "MIDEUM is a cloud-based and data-driven regulatory reporting platform that puts " +
      "user in control by focusing on simplicity, explainability and reliability. I took part " +
      "in the development of the frontend of this project as a freelance software developer.",
    moreInformationLink: "https://changegap.co/regtech/",
    skillLogos: [logos.REACT_LOGO, logos.SCSS_LOGO],
  },
  {
    imgUrl: "https://images.firstpost.com/wp-content/uploads/2021/08/twitter-redesign1280.jpg",
    projectName: "Twitter Clone",
    description:
      "In this project, I tried to make a simple clone version of twitter in order to improve myself. You can access the source code and demo from the links below.",
    liveLink: "https://mammimia.github.io/twitter-clone",
    sourceCodeLink: "https://github.com/mammimia/twitter-clone",
    skillLogos: [logos.REACT_LOGO, logos.FIREBASE_LOGO, logos.MATERIAL_UI_LOGO],
  },
  {
    imgUrl: portfolioImg.src,
    projectName: "Portfolio Website",
    description:
      "The site you are currently on is also one of the projects I have developed. You can access the open source code from the link below.",
    sourceCodeLink: "https://github.com/mammimia/portfolio",
    skillLogos: [logos.NEXTJS_LOGO, logos.TAILWIND_LOGO],
  },
];
