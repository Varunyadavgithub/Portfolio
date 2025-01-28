import React from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col justify-center py-16 px-4 md:px-20"
    >
      <HeroSection />
    </motion.div>
  );
};

export default Home;
