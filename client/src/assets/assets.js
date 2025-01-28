import Profile from "./Profile.jpg";
import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaGit,
  FaGithub,
  FaLinux,
  FaPython,
  FaJava,
  FaDocker,
  FaNetworkWired,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiRedux,
  SiReactquery,
  SiIntellijidea,
  SiCplusplus,
  SiPostman,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

export const assets = { Profile };

export const Expertise = [
  {
    icon: FaCode,
    title: "Web Development",
    description:
      "Creating responsive and dynamic web applications using modern technologies.",
  },
  {
    icon: FaLaptopCode,
    title: "Full Stack Solutions",
    description:
      "End-to-end development with expertise in MERN stack and cloud technologies.",
  },
  {
    icon: FaRocket,
    title: "Performance Optimization",
    description:
      "Delivering high-performance, scalable, and efficient web solutions.",
  },
];



export const skills = [
  // Frontend Skills
  {
    name: "JavaScript",
    icon: SiJavascript,
    category: "Frontend",
    proficiency: 90,
    color: "bg-yellow-500",
    textColor: "text-yellow-500",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    category: "Frontend",
    proficiency: 85,
    color: "bg-blue-600",
    textColor: "text-blue-600",
  },
  {
    name: "React",
    icon: FaReact,
    category: "Frontend",
    proficiency: 95,
    color: "bg-blue-400",
    textColor: "text-blue-400",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    category: "Frontend",
    proficiency: 85,
    color: "bg-black",
    textColor: "text-black",
  },
  {
    name: "HTML5",
    icon: FaHtml5,
    category: "Frontend",
    proficiency: 95,
    color: "bg-orange-500",
    textColor: "text-orange-500",
  },
  {
    name: "CSS3",
    icon: FaCss3,
    category: "Frontend",
    proficiency: 90,
    color: "bg-blue-600",
    textColor: "text-blue-600",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    category: "Frontend",
    proficiency: 90,
    color: "bg-teal-500",
    textColor: "text-teal-500",
  },
  {
    name: "Bootstrap",
    icon: FaBootstrap,
    category: "Frontend",
    proficiency: 80,
    color: "bg-purple-600",
    textColor: "text-purple-600",
  },
  {
    name: "Redux",
    icon: SiRedux,
    category: "Frontend",
    proficiency: 85,
    color: "bg-purple-400",
    textColor: "text-purple-400",
  },
  {
    name: "React Query",
    icon: SiReactquery,
    category: "Frontend",
    proficiency: 75,
    color: "bg-red-500",
    textColor: "text-red-500",
  },
  // Backend Skills
  {
    name: "Node.js",
    icon: FaNodeJs,
    category: "Backend",
    proficiency: 90,
    color: "bg-green-600",
    textColor: "text-green-600",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    category: "Backend",
    proficiency: 85,
    color: "bg-gray-700",
    textColor: "text-gray-700",
  },
  // Database Skills
  {
    name: "MongoDB",
    icon: SiMongodb,
    category: "Database",
    proficiency: 85,
    color: "bg-green-500",
    textColor: "text-green-500",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    category: "Database",
    proficiency: 80,
    color: "bg-blue-700",
    textColor: "text-blue-700",
  },
  // Programming Languages
  {
    name: "Python",
    icon: FaPython,
    category: "Programming",
    proficiency: 85,
    color: "bg-blue-600",
    textColor: "text-blue-600",
  },
  {
    name: "C++",
    icon: SiCplusplus,
    category: "Programming",
    proficiency: 75,
    color: "bg-blue-500",
    textColor: "text-blue-500",
  },
  {
    name: "Java",
    icon: FaJava,
    category: "Programming",
    proficiency: 70,
    color: "bg-red-600",
    textColor: "text-red-600",
  },
  // Tools
  {
    name: "Git",
    icon: FaGit,
    category: "Tools",
    proficiency: 90,
    color: "bg-orange-600",
    textColor: "text-orange-600",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    category: "Tools",
    proficiency: 95,
    color: "bg-gray-800",
    textColor: "text-gray-800",
  },
  {
    name: "VS Code",
    icon: VscVscode,
    category: "Tools",
    proficiency: 95,
    color: "bg-blue-500",
    textColor: "text-blue-500",
  },
  {
    name: "IntelliJ IDEA",
    icon: SiIntellijidea,
    category: "Tools",
    proficiency: 85,
    color: "bg-purple-600",
    textColor: "text-purple-600",
  },
  {
    name: "Docker",
    icon: FaDocker,
    category: "Tools",
    proficiency: 80,
    color: "bg-blue-400",
    textColor: "text-blue-400",
  },
  {
    name: "Linux",
    icon: FaLinux,
    category: "Tools",
    proficiency: 75,
    color: "bg-gray-700",
    textColor: "text-gray-700",
  },

  // Add Postman
  {
    name: "Postman",
    icon: SiPostman,
    category: "Tools",
    proficiency: 85,
    color: "bg-orange-500",
    textColor: "text-orange-500",
  },

  // API-related skill
  {
    name: "API ",
    icon: FaNetworkWired,
    category: "Tools",
    proficiency: 85,
    color: "bg-green-600",
    textColor: "text-green-600",
  },
];
