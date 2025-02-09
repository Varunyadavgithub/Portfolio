import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { assets } from "../assets/assets";

const DSACodingProfiles = () => {
  const codingProfiles = [
    {
      platform: "LeetCode",
      username: "its_varunyadav01",
      profileLink: "https://leetcode.com/its_varunyadav01/",
      logo: assets.LeetCode,
      color: "text-yellow-400 hover:text-yellow-600",
    },
    {
      platform: "GeeksforGeeks",
      username: "vyadav01",
      profileLink: "https://www.geeksforgeeks.org/user/vyadav01/",
      logo: assets.Gfg,
      color: "text-green-600 hover:text-green-800",
    },
    {
      platform: "CodingNinjas",
      username: "Varun_yadav",
      profileLink: "https://www.naukri.com/code360/profile/Varun_yadav",
      logo: assets.CodingNinjas,
      color: "text-orange-600 hover:text-orange-800",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
        DSA & Coding Journey
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {codingProfiles.map((profile) => (
            <motion.div
              key={profile.platform}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.03 }}
              className="w-full"
            >
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex items-center space-x-4 w-full sm:w-auto">
                  <img
                    src={profile.logo}
                    alt={`${profile.platform} Logo`}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-contain"
                  />
                  <div className="flex-grow">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">
                      {profile.platform}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      @{profile.username}
                    </p>
                  </div>
                </div>

                <a
                  href={profile.profileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    ${profile.color}
                    transition-colors duration-300
                    p-2 rounded-full
                    hover:bg-gray-100
                    self-end sm:self-auto
                  `}
                  aria-label={`${profile.platform} Profile`}
                >
                  <FaExternalLinkAlt className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DSACodingProfiles;
