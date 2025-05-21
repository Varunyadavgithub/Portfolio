import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const menuVariants = {
    hidden: {
      opacity: 0,
      x: "100%",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 120,
      },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: {
        ease: "easeInOut",
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
      },
    }),
  };

  return (
    <nav className="fixed top-0 left-0 w-full px-2 md:px-20 z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex flex-col">
            <Link to="/">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-gray-800 tracking-wider"
              >
                Varun Yadav
              </motion.div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
                custom={index}
                className="relative"
              >
                <Link
                  to={item.path}
                  className={`
                    text-lg font-medium relative group
                    ${
                      location.pathname === item.path
                        ? "text-blue-600"
                        : "text-gray-700"
                    }
                  `}
                >
                  {item.name}
                  <span
                    className={`
                      absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600
                      group-hover:w-full transition-all duration-300 ease-in-out
                      ${
                        location.pathname === item.path
                          ? "w-full"
                          : "group-hover:w-full"
                      }
                    `}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-50 relative"
          >
            <div className={`hamburger ${isOpen ? "active" : ""}`}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 h-screen w-64 bg-white/95 shadow-lg p-8 md:hidden"
            >
              <div className="flex flex-col space-y-8 mt-20">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial="hidden"
                    animate="visible"
                    variants={navItemVariants}
                    custom={index}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`
                        text-xl relative group
                        ${
                          location.pathname === item.path
                            ? "text-blue-600"
                            : "text-gray-700"
                        }
                        transition-colors duration-300 font-medium 
                        hover:pl-2 transform
                      `}
                    >
                      {item.name}
                      <span
                        className={`
                          absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600
                          group-hover:w-full transition-all duration-300 ease-in-out
                          ${
                            location.pathname === item.path
                              ? "w-full"
                              : "group-hover:w-full"
                          }
                        `}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
