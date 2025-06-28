// LoadingScreen.jsx
import React from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-black text-green-400 flex items-center justify-center z-50">
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="text-4xl"
      >
        ⚙️
      </motion.div>
      <p className="ml-4 text-xl font-semibold">Loading...</p>
    </div>
  );
};

export default LoadingScreen;
