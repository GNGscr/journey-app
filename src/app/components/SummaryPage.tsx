import { motion, Variants } from "framer-motion";
import { SummaryPageProps } from "../types";
import { RotateCcw, Check } from "lucide-react";
import Confetti from "./Confetti";

const SummaryPage: React.FC<SummaryPageProps> = ({
  selections,
  theme,
  showConfetti,
  onRestart,
}) => {
  const pageVariants: Variants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <motion.div
      key="summary"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl relative"
    >
      {showConfetti && <Confetti />}

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="text-center mb-12"
      >
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Check className="w-20 h-20 mx-auto mb-4 text-green-400" />
        </motion.div>
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          Your Journey Awaits!
        </h2>
      </motion.div>

      <div className="space-y-6">
        {selections.destination && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className={`p-6 rounded-2xl ${
              theme === "dark" ? "bg-white/10" : "bg-white"
            } backdrop-blur-md shadow-xl`}
          >
            <div className="flex items-center gap-4">
              <div className="text-5xl">{selections.destination.emoji}</div>
              <div>
                <p
                  className={`text-sm mb-1 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Destination
                </p>
                <h3 className="text-2xl font-bold">
                  {selections.destination.name}
                </h3>
                <p
                  className={
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }
                >
                  {selections.destination.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {selections.activity && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className={`p-6 rounded-2xl ${
              theme === "dark" ? "bg-white/10" : "bg-white"
            } backdrop-blur-md shadow-xl`}
          >
            <div className="flex items-center gap-4">
              <div className="text-5xl">{selections.activity.emoji}</div>
              <div>
                <p
                  className={`text-sm mb-1 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Activity
                </p>
                <h3 className="text-2xl font-bold">
                  {selections.activity.name}
                </h3>
                <p
                  className={
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }
                >
                  {selections.activity.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {selections.guide && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            className={`p-6 rounded-2xl ${
              theme === "dark" ? "bg-white/10" : "bg-white"
            } backdrop-blur-md shadow-xl`}
          >
            <div className="flex items-center gap-4">
              <div className="text-5xl">{selections.guide.emoji}</div>
              <div>
                <p
                  className={`text-sm mb-1 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Guide
                </p>
                <h3 className="text-2xl font-bold">{selections.guide.name}</h3>
                <p
                  className={
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }
                >
                  {selections.guide.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="text-center mt-12"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onRestart}
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold text-lg shadow-2xl hover:shadow-blue-500/50 transition-shadow inline-flex items-center gap-2"
        >
          <RotateCcw size={20} />
          Restart Journey
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default SummaryPage;
