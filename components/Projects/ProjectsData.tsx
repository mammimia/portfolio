import * as logos from "../../constants/TechnologyLogoPaths";
import d14AiWebsiteLogo from "../../public/assets/images/d14-ai-website-logo.svg";
import dhealthImg from "../../public/assets/images/dhealth-img.png";
import shiftitImg from "../../public/assets/images/shiftit-img.png";

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
    projectName: "Shiftit",
    description: "",
    moreInformationLink: "https://www.d14.ai/shiftit",
  },
  {
    imgUrl: "https://images.firstpost.com/wp-content/uploads/2021/08/twitter-redesign1280.jpg",
    projectName: "Twitter Clone",
    description: "",
  },
  {
    imgUrl: "https://images.firstpost.com/wp-content/uploads/2021/08/twitter-redesign1280.jpg",
    projectName: "Mideum",
    description: "",
  },
  {
    imgUrl: "https://images.firstpost.com/wp-content/uploads/2021/08/twitter-redesign1280.jpg",
    projectName: "Portfolio Website",
    description: "",
  },
  {
    imgUrl: "https://images.firstpost.com/wp-content/uploads/2021/08/twitter-redesign1280.jpg",
    projectName: "Burger Builder",
    description: "",
  },
];
