import React from "react";
import { motion, Variants } from "framer-motion";
import { RotateCcw, Check } from "lucide-react";
import {
  summaryPageVariant,
  summarySpringVariant,
  rotateThreeSixtyVariant,
  selectionVariant,
  restartWrpVariant,
  restartVariant,
} from "../../constants/variants/variants";
import { Themes, Summary } from "../../constants/enums";
import { SummaryPageProps } from "../../constants/types";
const Confetti = React.lazy(() => import("../ui/Confetti"));

const SummaryPage: React.FC<SummaryPageProps> = ({
  selections,
  theme,
  showConfetti,
  onRestart,
}) => {
  const { DARK } = Themes;
  const { YOUR_JOURNEY_AWAITS, RESTART_JOURNEY } = Summary;
  const pageVariants: Variants = summaryPageVariant;
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
        variants={summarySpringVariant}
        className="text-center mb-12"
      >
        <motion.div variants={rotateThreeSixtyVariant}>
          <Check className="w-20 h-20 mx-auto mb-4 text-green-400" />
        </motion.div>
        <h2
          className={`text-5xl font-bold mb-4
          bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent`}
        >
          {YOUR_JOURNEY_AWAITS}
        </h2>
      </motion.div>

      <div className="space-y-6">
        {Object.entries(selections).map(
          ([key, selection], index) =>
            selection && (
              <motion.div
                key={key}
                variants={selectionVariant}
                transition={{ delay: 0.5 + index * 0.2 }}
                className={`p-6 rounded-2xl ${
                  theme === DARK ? "bg-white/10" : "bg-white"
                } backdrop-blur-md shadow-xl`}
              >
                <div className="flex items-center gap-4">
                  <div className="text-5xl">{selection.emoji}</div>
                  <div>
                    <p
                      className={`text-sm mb-1 ${
                        theme === DARK ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </p>
                    <h3 className="text-2xl font-bold">{selection.name}</h3>
                    <p
                      className={
                        theme === DARK ? "text-gray-400" : "text-gray-600"
                      }
                    >
                      {selection.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
        )}
      </div>

      <motion.div variants={restartWrpVariant} className="text-center mt-12">
        <motion.button
          variants={restartVariant}
          onClick={onRestart}
          className={`px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full
            text-white font-semibold text-lg shadow-2xl hover:shadow-blue-500/50 transition-shadow
            inline-flex items-center gap-2 cursor-pointer`}
            aria-label="Restart journey"
        >
          <RotateCcw size={20} />
          {RESTART_JOURNEY}
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default SummaryPage;
