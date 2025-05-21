import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import { assets } from "../assets/assets";
import { Expertise } from "../assets/assets";
import { FaProjectDiagram, FaEnvelope, FaDownload } from "react-icons/fa";

const HeroSection = () => {
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
      className="min-h-screen flex flex-col justify-center py-4 px-2 md:py-16 md:px-04  sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          {/* Left Content */}
          <motion.div
            variants={itemVariants}
            className="text-center md:text-left order-2 md:order-1"
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              Hi, I'm Varun Yadav
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-gray-600 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <ReactTyped
                strings={[
                  "Full Stack Development",
                  "DevOps Enthusiast",
                  "Penetration Testing",
                  "Data Structures and Algorithms",
                  "Building Scalable Solutions",
                ]}
                typeSpeed={50}
                backSpeed={50}
                loop
                style={{ color: "green" }}
              />
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="flex">
                <Link
                  to="/projects"
                  className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 md:px-4 md:py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors text-lg font-semibold text-center"
                >
                  <FaProjectDiagram size={20} /> View Projects
                </Link>
              </div>
              <div className="flex">
                <Link
                  to="/contact"
                  className="flex items-center gap-2 border border-blue-600 text-blue-600 px-6 py-3 md:px-4 md:py-2 rounded-lg shadow-lg hover:bg-blue-50 transition-colors text-lg font-semibold text-center"
                >
                  <FaEnvelope size={20} /> Contact Me
                </Link>
              </div>
              <div className="flex">
                <a
                  href={assets.Resume}
                  download="Varun_Yadav_Resume.pdf"
                  className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 md:px-4 md:py-2 rounded-lg shadow-lg hover:bg-green-700 transition-colors text-lg font-semibold text-center cursor-pointer"
                >
                  <FaDownload size={20} /> Download Resume
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center order-1 md:order-2 mb-8 md:mb-0"
          >
            <div className="p-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
              <motion.img
                src={assets.Profile}
                alt="Varun Yadav"
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7 }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Expertise Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-12">
            My Expertise
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {Expertise.map((expertise, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center"
              >
                <div className="text-3xl sm:text-4xl text-blue-600 mb-3 sm:mb-4 flex justify-center">
                  <expertise.icon />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800">
                  {expertise.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {expertise.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
