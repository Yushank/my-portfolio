import { motion } from "motion/react";

export const PulsingDot = () => {
  return (
    <motion.div
      className="h-2 w-2 rounded-full bg-red-500"
      animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
  );
};

//custom made red dot to show live status of project
