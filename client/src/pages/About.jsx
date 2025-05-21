import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaMedal,
  FaLaptopCode,
  FaBriefcase,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaUserSecret,
} from "react-icons/fa";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { SiTryhackme } from "react-icons/si";

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
      company: "Taniya Webfix Pvt Ltd",
      logo: "https://taniyawebfix.com/wp-content/uploads/2024/09/logo.jpg",
      position: "Web Developer Intern",
      duration: "Aug 2024 - Mar 2025",
      location: "Vadodara, Gujarat, India · On-site",
      description: [
        "Developed responsive web interfaces using HTML, CSS, JavaScript, and React.js.",
        "Transformed designs into functional web pages with Tailwind CSS and GSAP animations.",
        "Optimized performance, fixed bugs, and ensured clean, maintainable code.",
        "Collaborated with teams, participated in code reviews, and managed client expectations.",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Tailwind CSS",
        "GSAP",
        "Git",
        "GitHub",
        "Responsive Web Design",
      ],
    },
    {
      company: "Western Refrigeration Pvt Ltd",
      logo: "https://westernequipments.com/wp-content/uploads/2025/01/western-head-logo-2025.png",
      position:
        "Software Developer Trainee – MES (Manufacturing Execution System)",
      duration: "May 2025 - Present",
      location: "Valsad, Gujarat, India · On-site",
      description: [
        "Designing and building a modern MES web application using React.js and Tailwind CSS to replace legacy desktop tools.",
        "Working with SQL databases for data storage, queries, and integration with the MES backend.",
        "Maintaining and updating existing MES applications to ensure reliable performance across production lines.",
        "Collaborating with engineers and stakeholders to understand requirements and implement process improvements.",
        "Ensuring smooth data flow between manufacturing operations and centralized systems.",
      ],
      technologies: [
        "React.js",
        "Tailwind CSS",
        "SQL",
        "Node.js",
        "Express.js",
        "Git",
        "GitHub",
        "MES Systems",
        "Full Stack Development",
      ],
    },
  ];

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
          className="flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl shadow-xl overflow-hidden mb-16"
        >
          <motion.div variants={itemVariants} className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-20"></div>
            <img
              src={assets.Profile}
              alt="Professional Portrait"
              className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:w-1/2 p-8 md:p-12 space-y-6"
          >
            <div className="relative">
              <h1 className="text-4xl font-bold text-gray-800 mb-4 relative">
                About Me
                <span className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-500"></span>
              </h1>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate Full Stack Developer with a keen interest in
                DevOps, cloud technologies, and web application security. My
                journey is driven by a continuous desire to learn and solve
                complex technological challenges.
              </p>

              <div className="flex items-center space-x-4">
                <div className="flex space-x-3">
                  <motion.a
                    href="https://github.com/varunyadavgithub"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="text-gray-700 hover:text-black"
                  >
                    <FaGithub className="text-2xl" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/varunyadavcse25/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaLinkedin className="text-2xl" />
                  </motion.a>
                  <motion.a
                    href="https://x.com/varun_yadav01"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="text-blue-400 hover:text-blue-600"
                  >
                    <FaTwitter className="text-2xl" />
                  </motion.a>
                  <motion.a
                    href="https://tryhackme.com/p/th3c0d3hunt3r101"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="text-red-500 hover:text-red-400 transition-colors"
                  >
                    <SiTryhackme className="text-2xl" />
                  </motion.a>
                </div>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to="/projects"
                className="inline-block bg-blue-500 text-white px-4 py-2 md:px-6 md:py-2 rounded-lg 
        hover:bg-blue-600 transition-all duration-300 
        text-base font-semibold shadow-md hover:shadow-lg"
              >
                View My Projects
              </Link>
            </motion.div>
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
                  {exp.logo ? (
                    <img
                      src={exp.logo}
                      alt={`${exp.company} Logo`}
                      className="w-16 sm:w-20 h-auto sm:mr-4 mb-3 sm:mb-0"
                    />
                  ) : (
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-500 text-white flex items-center justify-center rounded-full sm:mr-4 mb-3 sm:mb-0">
                      <FaBriefcase className="text-lg sm:text-2xl" />
                    </div>
                  )}

                  <div className="text-center sm:text-left w-full">
                    <h3 className="text-base sm:text-xl font-semibold text-gray-800">
                      {exp.position}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      {exp.company} | {exp.duration}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">{exp.location}</p>{" "}
                    {/* added line */}
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
                  institution: "BPMG Public School",
                  year: "2021 - 2022",
                  type: "Higher Secondary",
                  color: "bg-green-500",
                  icon: <FaGraduationCap />,
                },
                {
                  degree: "Class 10th",
                  institution: "Sterling Group of School",
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
