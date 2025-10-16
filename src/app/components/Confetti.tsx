import { useMemo } from "react";
import { motion, Variants } from "framer-motion";

const Confetti: React.FC = () => {
    const confettiVariants: Variants = useMemo(() => ({
      initial: { opacity: 0, y: -100 },
      animate: (i: number) => ({
        opacity: [0, 1, 1, 0],
        y: [0, 100 + Math.random() * 200],
        x: [-50 + Math.random() * 100, -100 + Math.random() * 200],
        rotate: Math.random() * 360,
        transition: { duration: 1 + Math.random(), delay: i * 0.1 },
      }),
    }), []);
      

  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={confettiVariants}
          initial="initial"
          animate="animate"
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: "10%",
          }}
        >
          <div
            className={`w-3 h-3 ${
              [
                "bg-red-500",
                "bg-blue-500",
                "bg-green-500",
                "bg-yellow-500",
                "bg-purple-500",
                "bg-pink-500",
              ][i % 6]
            } rounded-full`}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Confetti;
