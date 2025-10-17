import { motion } from "framer-motion";
import { progressIndicatorVariant } from "../../constants/variants/variants";
import { ProgressIndicatorProps } from "../../constants/types";
import { Themes, Stpes } from "../../constants/enums";

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  currentStep,
  theme,
  steps
}) => {
  if (currentStep === 0 || currentStep >= 4) return null;
  const { DARK } = Themes;
  const { STEP, OF } = Stpes;

  return (
    <div className="fixed top-6 left-6 z-40">
      <motion.div
        variants={progressIndicatorVariant}
        className={`px-4 py-2 rounded-full ${
          theme === DARK ? "bg-white/10" : "bg-black/10"
        } backdrop-blur-md`}
      >
        <p className="text-sm font-medium">{STEP} {currentStep} {OF} {steps}</p>
      </motion.div>
    </div>
  );
};  

export default ProgressIndicator;
