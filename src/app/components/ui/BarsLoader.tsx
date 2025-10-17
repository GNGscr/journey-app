import { motion, Variants } from "framer-motion";
import { Theme } from "../../constants/types";
import { Themes } from "../../constants/enums";

export default function BarsLoader({theme}: { theme: Theme }) {
  const { DARK } = Themes;
  const loaderVariants: Variants = {
    initial: { scaleY: 0, opacity: 0 },
    animate: {
      scaleY: 1,
      opacity: 1,
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 0.5,
        ease: "easeInOut",
      }
    }
  };
  return (
    <div className={`h-screen grid place-content-center px-4 py-24
      ${
        theme === DARK
          ? "bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900"
          : "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
      }`}
    >
      <motion.div
        transition={{ staggerChildren: 0.2 }}
        initial="initial"
        animate="animate"
        className="flex gap-1"
      >
        {[...Array(6)].map((_, idx) => (
          <motion.div
            key={idx}
            variants={loaderVariants}
            className="h-12 w-2 bg-yellow-400"
          />
        ))}
      </motion.div>
    </div>
  );
};
