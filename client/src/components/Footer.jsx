import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaShieldAlt,
  FaRocket,
  FaGraduationCap,
  FaLightbulb,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/varunyadavgithub",
      color: "text-gray-800 hover:text-black",
      label: "GitHub Profile",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/varunyadavcse25/",
      color: "text-blue-600 hover:text-blue-800",
      label: "LinkedIn Profile",
    },
    {
      icon: <FaTwitter />,
      url: "https://x.com/varun_yadav01",
      color: "text-blue-400 hover:text-blue-600",
      label: "Twitter Profile",
    },
  ];

  const footerSections = [
    {
      title: "My Learning Path",
      links: [
        {
          name: "Emerging Technologies",
          icon: <FaRocket />,
          description: "Exploring and growing in tech",
        },
        {
          name: "Skill Development",
          icon: <FaGraduationCap />,
          description: "Continuous learning mindset",
        },
        {
          name: "Open to Opportunities",
          icon: <FaLightbulb />,
          description: "Eager to learn and contribute",
        },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: "Skills", path: "/skills" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
      ],
    },
  ];

  const footerVariants = {
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
    <motion.footer
      initial="hidden"
      whileInView="visible"
      variants={footerVariants}
      className="bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 md:px-20 border-t"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding and Description */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <FaShieldAlt className="text-blue-600 text-3xl" />
              <h2 className="text-2xl font-bold text-gray-800">Varun Yadav</h2>
            </div>
            <p className="text-gray-600 mb-6">
              A passionate learner exploring the world of technology, with a
              focus on web development, DevOps, and cybersecurity. Committed to
              continuous growth and innovation.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`text-2xl ${social.color} transition-all duration-300`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Learning in Progress Section */}
            <div className="bg-blue-50 p-4 rounded-lg mt-6">
              <div className="flex items-center space-x-2 mb-2">
                <FaLightbulb className="text-yellow-500" />
                <h4 className="font-semibold text-gray-800">
                  Learning in Progress
                </h4>
              </div>
              <p className="text-sm text-gray-600">
                As a passionate learner, I'm continuously expanding my skills
                and exploring new technologies. Open to guidance and
                opportunities for growth.
              </p>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                {section.title}
              </h3>
              <div className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    to={link.path}
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {link.icon && (
                      <span className="text-blue-500">{link.icon}</span>
                    )}
                    <div>
                      <p className="font-medium">{link.name}</p>
                      {link.description && (
                        <p className="text-xs text-gray-500">
                          {link.description}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Security and Copyright */}
        <div className="mt-12 pt-6 border-t text-center">
          <div className="flex justify-center items-center space-x-2 mb-4 text-gray-600">
            <FaShieldAlt className="text-blue-600" />
            <p className="text-sm">Learning and Growing in Tech</p>
          </div>

          <p className="text-gray-600">
            © {new Date().getFullYear()} Varun Yadav. All Rights Reserved.
          </p>

          <div className="mt-2 text-xs text-gray-500 flex justify-center space-x-4">
            <Link
              to="/privacy-policy"
              className="hover:text-blue-600 cursor-not-allowed"
              onClick={(e) => e.preventDefault()}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="hover:text-blue-600 cursor-not-allowed"
              onClick={(e) => e.preventDefault()}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
