import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaCloud,
  FaShieldAlt,
  FaDatabase,
  FaRobot,
  FaBrain,
} from "react-icons/fa";

const InterestCard = ({ icon, title, description, color }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      }}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className={`${color} p-3 rounded-full`}>
          {React.cloneElement(icon, { className: "text-3xl text-white" })}
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const InterestsSection = () => {
  const Interests = [
    {
      icon: <FaCode />,
      title: "Full Stack Development",
      description:
        "Crafting robust, scalable web applications using modern technologies and best practices.",
      color: "bg-blue-500",
    },
    {
      icon: <FaCloud />,
      title: "DevOps & Cloud Computing",
      description:
        "Implementing continuous integration, deployment, and cloud-native solutions.",
      color: "bg-green-500",
    },
    {
      icon: <FaShieldAlt />,
      title: "Cybersecurity",
      description:
        "Exploring web application security, penetration testing, and ethical hacking methodologies.",
      color: "bg-red-500",
    },
    {
      icon: <FaDatabase />,
      title: "Data Structures & Algorithms",
      description:
        "Solving complex computational problems with efficient algorithmic approaches.",
      color: "bg-purple-500",
    },
    {
      icon: <FaRobot />,
      title: "Emerging Technologies",
      description:
        "Staying at the forefront of technological innovation, including AI and machine learning.",
      color: "bg-indigo-500",
    },
    {
      icon: <FaBrain />,
      title: "Continuous Learning",
      description:
        "Committed to personal growth, exploring new technologies, and expanding technical horizons.",
      color: "bg-pink-500",
    },
  ];
  return (
    <div>
      {/* Interests Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-16"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            My Professional Interests
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Interests.map((interest, index) => (
              <InterestCard key={index} {...interest} />
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default InterestsSection;
