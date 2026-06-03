"use client";

import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{
        duration: 1.2,
        delay: 1.5,
        ease: "easeInOut",
      }}
      className="fixed inset-0 z-50 bg-yellow-500 flex items-center justify-center"
    >
      <div className="w-14 h-14 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
    </motion.div>
  );
};

export default Loader;