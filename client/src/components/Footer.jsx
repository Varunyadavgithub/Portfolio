import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope, 
  FaPhone 
} from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/varunyadavgithub",
      color: "text-gray-800 hover:text-black"
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/varunyadavcse25/",
      color: "text-blue-600 hover:text-blue-800"
    },
    {
      icon: <FaTwitter />,
      url: "https://x.com/varun_yadav01",
      color: "text-blue-400 hover:text-blue-600"
    },
    {
      icon: <FaEnvelope />,
      url: "mailto:your.email@example.com",
      color: "text-red-500 hover:text-red-700"
    }
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      variants={footerVariants}
      className="bg-gradient-to-r from-gray-50 to-gray-100 py-12 px-4 md:px-20 border-t"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-red-500" />
                <span>varunyadav@example.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone className="text-green-500" />
                <span>+91 1234567890</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Quick Links</h3>
            <div className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Projects", path: "/projects" },
                { name: "Skills", path: "/skills" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" }
              ].map((link) => (
                <a 
                  key={link.path} 
                  href={link.path} 
                  className="block text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Connect Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl ${social.color} transition-all duration-300`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t text-center text-gray-600">
          <p>
            © {new Date().getFullYear()} Varun Yadav. All Rights Reserved.
            <br />
            <span className="text-sm">Designed with ❤️ using React & Tailwind</span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;