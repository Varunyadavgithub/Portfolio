import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaMedal,
  FaLaptopCode,
  FaBriefcase,
} from "react-icons/fa";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const About = () => {
  const experiences = [
    {
      title: "Full Stack Development",
      description:
        "Passionate about creating robust, scalable web applications using modern technologies.",
      icon: <FaCode />,
      color: "text-blue-600",
    },
    {
      title: "DevOps & Cloud",
      description:
        "Implementing continuous integration and deployment strategies for efficient software delivery.",
      icon: <FaLaptopCode />,
      color: "text-green-600",
    },
    {
      title: "Cybersecurity",
      description:
        "Exploring web application security and penetration testing methodologies.",
      icon: <FaMedal />,
      color: "text-red-600",
    },
  ];

  const workExperience = [
    {
      company: "Taniya Webfix Pvt.Ltd",
      position: "Web Developer Intern",
      duration: "August 2024 - January 2025",
      description: [
        "Developed responsive web applications using React and Node.js",
        "Implemented RESTful APIs and integrated with backend services",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB"],
    },
  ];

  const personalInfo = {
    name: "Varun Yadav",
    location: "Vadodara, India",
    email: "varunyadav@example.com",
    phone: "+91 1234567890",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 py-16 px-4 md:px-20"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Profile Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-10 items-center mb-16"
        >
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="p-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md">
              <img
                src={assets.Profile}
                alt="Varun Yadav"
                className="w-full object-cover rounded-md shadow-lg"
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
            <p className="text-lg text-gray-600 mb-6">
              I'm a passionate Full Stack Developer with a keen interest in
              DevOps, cloud technologies, and web application security. My
              journey is driven by a continuous desire to learn and solve
              complex technological challenges.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {Object.entries(personalInfo).map(([key, value]) => (
                <div key={key} className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-semibold text-gray-700 capitalize">
                    {key}
                  </h3>
                  <p className="text-gray-600">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Professional Focus */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Professional Focus
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div
                  className={`text-5xl mb-4 flex justify-center ${exp.color}`}
                >
                  {exp.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {exp.title}
                </h3>
                <p className="text-gray-600">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Work Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
            Professional Experience
          </h2>

          <div className="space-y-6 sm:space-y-8">
            {workExperience.map((exp, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-5 sm:p-6 rounded-lg shadow-md"
              >
                <div className="flex flex-col sm:flex-row items-center mb-4">
                  <div className="bg-blue-500 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center sm:mr-4 mb-3 sm:mb-0">
                    <FaBriefcase className="text-lg sm:text-2xl" />
                  </div>
                  <div className="text-center sm:text-left w-full">
                    <h3 className="text-base sm:text-xl font-semibold text-gray-800">
                      {exp.position}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      {exp.company} | {exp.duration}
                    </p>
                  </div>
                </div>

                <ul className="list-disc list-inside text-gray-700 mb-4 text-sm sm:text-base">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="bg-blue-50 text-blue-600 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Educational Journey
          </h2>

          <div className="relative py-8 px-4 md:px-20">
            {/* Vertical Line - Hidden on small screens */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-500 h-full top-0 bottom-0 z-0"></div>

            <div className="space-y-8 relative">
              {[
                {
                  degree: "Bachelor of Computer Applications",
                  institution: "Parul University, Vadodara",
                  year: "2022 - 2025",
                  type: "Graduation",
                  color: "bg-blue-500",
                  icon: <FaGraduationCap />,
                },
                {
                  degree: "Class 12th",
                  institution: "BPMG Public School.",
                  year: "2021 - 2022",
                  type: "Higher Secondary",
                  color: "bg-green-500",
                  icon: <FaGraduationCap />,
                },
                {
                  degree: "Class 10th",
                  institution: "Sterling group of School.",
                  year: "2019 - 2020",
                  type: "Secondary",
                  color: "bg-purple-500",
                  icon: <FaGraduationCap />,
                },
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="flex flex-col md:flex-row items-center w-full"
                >
                  {/* Education Card - Left Side on Desktop */}
                  <div
                    className={`
              w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md mb-4 md:mb-0
              ${
                index % 2 === 0
                  ? "md:mr-auto md:text-right"
                  : "md:ml-auto md:text-left"
              }
            `}
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2 md:mb-0">
                        {edu.degree}
                      </h3>
                      <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {edu.type}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">{edu.institution}</p>
                    <p className="text-sm text-gray-500">{edu.year}</p>
                  </div>

                  {/* Timeline Dot - Centered */}
                  <div
                    className={`
              hidden md:flex absolute left-1/2 transform -translate-x-1/2 
              w-8 h-8 rounded-full ${edu.color} 
              items-center justify-center text-white z-10
            `}
                  >
                    {edu.icon}
                  </div>

                  {/* Mobile Timeline Dot */}
                  <div
                    className={`
              md:hidden w-8 h-8 rounded-full ${edu.color} 
              flex items-center justify-center text-white mb-4
            `}
                  >
                    {edu.icon}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12 sm:mt-16 bg-gradient-to-r from-blue-500 to-purple-600 p-6 sm:p-10 rounded-lg text-center text-white"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
          >
            Let's Innovate and Secure the Web
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg mb-5 sm:mb-6 text-blue-100 max-w-2xl mx-auto"
          >
            Interested in building robust, secure, and scalable web solutions
            that push the boundaries of technology and innovation?
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-6 py-2 sm:px-8 sm:py-3 
      rounded-lg hover:bg-blue-50 transition-all duration-300 
      text-sm sm:text-base font-semibold shadow-md hover:shadow-lg"
            >
              Collaborate Now
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
