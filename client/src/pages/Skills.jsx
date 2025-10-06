import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "../assets/assets";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const skillCategories = [
    "All",
    "Frontend",
    "Backend",
    "Programming",
    "Tools",
    "Database",
  ];

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-16 px-4 md:px-20 bg-gray-50"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Page Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            My Technical Skills
          </h1>
          <p className="text-xl text-gray-600">
            Technologies I've mastered and continue to explore
          </p>
        </motion.div>

        {/* Skill Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-4 py-2 rounded-full transition-all duration-300
                ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-blue-100"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.1,
                duration: 0.3,
              }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-md p-6 text-center"
            >
              <div
                className={`
                w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center
                ${skill.color} text-white text-3xl
              `}
              >
                <skill.icon />
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${skill.textColor}`}>
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
