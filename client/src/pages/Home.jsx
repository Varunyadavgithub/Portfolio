import React from "react";
import { motion } from "framer-motion";

import HeroSection from "../components/HeroSection";
import InterestsSection from "../components/InterestsSection";
import DSACodingProfiles from "../components/DSACodingProfiles";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 flex flex-col justify-center py-16 px-4 md:px-20"
    >
      <HeroSection />
      <DSACodingProfiles />
      <InterestsSection />
    </motion.div>
  );
};

export default Home;
