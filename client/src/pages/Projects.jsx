import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaLink, FaGithub, FaBuilding, FaUser } from "react-icons/fa";
import { projects } from "../assets/assets";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeOrigin, setActiveOrigin] = useState("Personal");

  // Origin filter
  const projectOrigins = ["Personal", "Company"];

  // Dynamic category extraction
  const projectCategories = ["All", "Frontend", "Backend", "Full Stack"];

  // Filtering logic
  const filteredProjects = projects.filter(
    (project) =>
      (activeCategory === "All" || project.category === activeCategory) &&
      (activeOrigin === "All" ||
        (activeOrigin === "Personal" && !project.company) ||
        (activeOrigin === "Company" && project.company))
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-20"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Page Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <div className="flex justify-center items-center space-x-3 mb-4">
            <FaCode className="text-blue-600 text-3xl sm:text-4xl" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
              My Projects
            </h1>
          </div>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of my projects, demonstrating my technical skills and
            creative solutions across different fields.
          </p>
        </motion.div>

        {/* Filter Section */}
        <div className="flex flex-col space-y-4 mb-8 sm:mb-12">
          {/* Origin Filters */}
          <div className="flex justify-center">
            <div className="bg-white rounded-full shadow-md p-1 flex space-x-2">
              {[...projectOrigins].map((origin) => (
                <motion.button
                  key={origin}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveOrigin(origin)}
                  className={`
                    px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300 
                    flex items-center space-x-2 text-xs sm:text-sm
                    ${
                      activeOrigin === origin
                        ? "bg-green-600 text-white"
                        : "text-gray-700 hover:bg-green-50"
                    }
                  `}
                >
                  {origin === "Personal" ? (
                    <FaUser />
                  ) : origin === "Company" ? (
                    <FaBuilding />
                  ) : (
                    origin
                  )}
                  <span className="ml-1 sm:ml-2">{origin}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex justify-center">
            <div className="bg-white rounded-full shadow-md p-1 flex space-x-2">
              {projectCategories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category)}
                  className={`
                    px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300 
                    text-xs sm:text-sm
                    ${
                      activeCategory === category
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-blue-50"
                    }
                  `}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Total Projects Count */}
        <div className="text-center mb-8">
          <p className="text-lg sm:text-xl font-semibold text-gray-800">
            Total Projects: {filteredProjects.length}
          </p>
        </div>

        {/* Projects Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
              }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all"
            >
              <div className="bg-blue-50 p-3 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  {project.company ? (
                    <>
                      <FaBuilding className="text-blue-600" />
                      <span className="text-sm text-gray-600">
                        {project.company}
                      </span>
                    </>
                  ) : (
                    <>
                      <FaUser className="text-green-600" />
                      <span className="text-sm text-gray-600">
                        Personal Project
                      </span>
                    </>
                  )}
                </div>
                <div
                  className={`text-2xl ${
                    project.category === "Frontend"
                      ? "text-orange-500"
                      : project.category === "Backend"
                      ? "text-green-500"
                      : project.category === "Full Stack"
                      ? "text-purple-500"
                      : "text-blue-600"
                  }`}
                >
                  {<project.icon />}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between border-t pt-2">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    className="text-gray-600 hover:text-blue-600 flex items-center space-x-2"
                  >
                    <FaGithub className="text-black" />
                    <span>GitHub</span>
                  </a>
                  {project.liveLink !== "#" && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      className="text-gray-600 hover:text-green-600 flex items-center space-x-2"
                    >
                      <FaLink className="text-green-600" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Projects Found */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-base sm:text-xl text-gray-600">
              No projects found matching the selected filters.
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Projects;
