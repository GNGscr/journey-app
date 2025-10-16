import { motion } from "framer-motion";
import { progressIndicatorVariant } from "../variants/variants";
import { ProgressIndicatorProps } from "../types";

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  currentStep,
  theme,
}) => {
  if (currentStep === 0 || currentStep >= 4) return null;

  return (
    <div className="fixed top-6 left-6 z-40">
      <motion.div
        variants={progressIndicatorVariant}
        className={`px-4 py-2 rounded-full ${
          theme === "dark"
            ? "bg-white/10"
            : "bg-black/10"
        } backdrop-blur-md`}
      >
        <p className="text-sm font-medium">Step {currentStep} of 3</p>
      </motion.div>
    </div>
  );
};

export default ProgressIndicator;
