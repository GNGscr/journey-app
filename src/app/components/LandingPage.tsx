import { motion, Variants } from "framer-motion";
import { Sparkles } from "lucide-react";
import { LandingPageProps } from "../types";

const LandingPage: React.FC<LandingPageProps> = ({ theme, onStart }) => {
  const pageVariants: Variants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <motion.div
      key="landing"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      className="text-center max-w-2xl"
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
      >
        <Sparkles className="w-20 h-20 mx-auto mb-6 text-yellow-400" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent"
      >
        Choose Your Journey
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className={`text-xl mb-8 ${
          theme === "dark" ? "text-gray-300" : "text-gray-600"
        }`}
      >
        Embark on an adventure tailored just for you
      </motion.p>

      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onStart}
        className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold text-lg shadow-2xl hover:shadow-purple-500/50 transition-shadow"
      >
        Start Your Journey
      </motion.button>
    </motion.div>
  );
};

export default LandingPage;
