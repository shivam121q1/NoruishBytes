import React from "react";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-700 text-white px-6">
      <div className="w-11/12 max-w-5xl text-center">
        
        {/* Tagline with Animation */}
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Harvesting <span className="text-yellow-300">Purity</span>,  
          <br />
          <span className="text-yellow-700">Exporting</span> Trust.
        </motion.h1>

        {/* Subtext with Subtle Fade-in Effect */}
        <motion.p 
          className="mt-6 text-lg md:text-2xl text-yellow-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Your trusted partner in global <span className="font-semibold text-yellow-800">import & export</span>.  
          Bringing premium products from farms to the world.
        </motion.p>

        {/* CTA Buttons with Smooth Hover Effect */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
          <motion.button
            className="px-8 py-4 bg-white text-yellow-700 font-semibold text-lg rounded-lg shadow-lg hover:bg-yellow-100 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Quote
          </motion.button>

          <motion.button
            className="px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-lg hover:bg-white hover:text-yellow-700 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
