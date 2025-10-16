import Head from "next/head";
import { motion, Variants } from "framer-motion";
import { ChoiceStepProps } from "../types";
import { choiceStepPageVariant, cardVariant, stepIconVariant } from "../variants/variants";

const ChoiceStep: React.FC<ChoiceStepProps> = ({
  title,
  description,
  icon,
  items,
  theme,
  onSelect,
}) => {
  const pageVariants: Variants = choiceStepPageVariant;

  const cardVariants: Variants = cardVariant;

  return (
    <>
      <Head>
        <title>Choises Step</title>
        <meta name="description" content="Choises Step" />
      </Head>
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl"
      >
        <motion.div
          variants={stepIconVariant}
          className="text-center mb-12"
        >
          {icon}
          <h2 className="text-4xl font-bold mb-2">{title}</h2>
          <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
              transition={{ delay: i * 0.1 }}
              onClick={() => onSelect(item)}
              className={`p-6 rounded-2xl cursor-pointer ${
                theme === "dark"
                  ? "bg-white/10 hover:bg-white/20"
                  : "bg-white hover:bg-gray-50"
              } backdrop-blur-md shadow-xl`}
            >
              <div className="text-5xl mb-3">{item.emoji}</div>
              <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
              <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default ChoiceStep;
