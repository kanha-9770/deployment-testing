import {
    FaLeaf,
    FaProjectDiagram,
    FaLightbulb,
    FaRecycle,
  } from "react-icons/fa";

  import {

    missionImage,
    companyImage,
    strengthImage,
    pinkCityImage,
    paperBowlMachineImage,
    paperBagMachineImage,
    paperPlateMachineImage,
    paperFlexoMachineImage,
    fullyAutomaticBagMachineImage,
    PCM110WithPLC,
    paperStrawMachine,
    paperLunchBoxMachine,
  } from "../../../../public/assets";
  import HomeAbout1 from "../../../../public/assets/HomeAbout1.png";
  import HomeAbout2 from "../../../../public/assets/HomeAbout2.jpg";
  import HomeAbout3 from "../../../../public/assets/HomeAbout3.png";
  import { StaticImageData } from "next/image";

  interface Images {
    paperBowlMachineImage: StaticImageData;
    paperBagMachineImage: StaticImageData;
    PCM110WithPLC: StaticImageData;
    paperPlateMachineImage: StaticImageData;
    paperFlexoMachineImage: StaticImageData;
    fullyAutomaticBagMachineImage: StaticImageData;
    paperStrawMachine: StaticImageData;
    paperLunchBoxMachine: StaticImageData;
  }
  
  export const images: Images = {
    paperBowlMachineImage: paperBowlMachineImage,
    paperBagMachineImage: paperBagMachineImage,
    PCM110WithPLC: PCM110WithPLC,
    paperPlateMachineImage: paperPlateMachineImage,
    paperFlexoMachineImage: paperFlexoMachineImage,
    fullyAutomaticBagMachineImage: fullyAutomaticBagMachineImage,
    paperStrawMachine: paperStrawMachine,
    paperLunchBoxMachine: paperLunchBoxMachine,
  };
  export const items = [
    {
      title: "Sustainability",
      description:
        "Paper industry adopts biodegradable materials and enhances recycling efforts.",
      color: "bg-green-100",
      icon: FaLeaf,
    },
    {
      title: "Featured Projects",
      description:
        "Paper industry adopts biodegradable materials and enhances recycling efforts.",
      color: "bg-purple-100",
      icon: FaProjectDiagram,
    },
    {
      title: "Innovation",
      description: "New technologies in paper manufacturing increase efficiency.",
      color: "bg-blue-100",
      icon: FaLightbulb,
    },
    {
      title: "Recycling",
      description:
        "Recycling initiatives in the paper industry have grown significantly.",
      color: "bg-yellow-100",
      icon: FaRecycle,
    },
  ];
  
  export const titlesWithImages = [
    { title: "Mission & Vision", image: missionImage },
    { title: "Our Company", image: companyImage },
    { title: "Our Strength", image: strengthImage },
    { title: "The Pink City", image: pinkCityImage },
  ];
  export const data = {
    heading: "Leading the Way in Food Packaging Machine Manufacturing",
    description: `At Nessco India, we specialize in manufacturing advanced food packaging machines that set industry standards for quality and innovation. Our state-of-the-art technology ensures efficient and sustainable solutions, meeting the diverse needs of our global clientele. With over 40 years of expertise, we are dedicated to pioneering eco-friendly practices in packaging. Trust us to lead the way in transforming packaging solutions for a greener future.`,
    stats: {
      machinesSold: "30000+",
      readyStockMachines: "3000+",
    },
    cards: [
      {
        title: "Vision & Mission",
        image: HomeAbout1.src,
        link: "#",
      },
      {
        title: "Our Strength",
        image: HomeAbout2.src,
        link: "#",
      },
      {
        title: "People & Culture",
        image: HomeAbout3.src,
        link: "#",
      },
    ],
  };