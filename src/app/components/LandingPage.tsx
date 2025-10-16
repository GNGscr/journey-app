import Head from "next/head";
import { motion, Variants } from "framer-motion";
import { Sparkles } from "lucide-react";
import { LandingPageProps } from "../types";
import {
  landingPageVariant,
  sparklesVariant,
  chooseJourneyVariant,
  embarkAdventureVariant,
  startJourneyVariant,
} from "../variants/variants";

const LandingPage: React.FC<LandingPageProps> = ({ theme, onStart }) => {

  const pageVariants: Variants = landingPageVariant;

  return (
    <>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="This is the Landing Page" />
      </Head>
      <motion.div
        key="landing"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="text-center max-w-2xl"
      >
        <motion.div variants={sparklesVariant}>
          <Sparkles className="w-20 h-20 mx-auto mb-6 text-yellow-400" />
        </motion.div>

        <motion.h1
          variants={chooseJourneyVariant}
          className={`text-6xl leading-[4.15rem] font-bold mb-4 
              bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400
              bg-clip-text text-transparent`}
        >
          Choose Your Journey
        </motion.h1>

        <motion.p
          variants={embarkAdventureVariant}
          className={`text-xl mb-8 ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Embark on an adventure tailored just for you
        </motion.p>

        <motion.button
          variants={startJourneyVariant}
          onClick={onStart}
          className={`px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full
              text-white font-semibold text-lg shadow-2xl hover:shadow-purple-500/50 transition-shadow`}
        >
          Start Your Journey
        </motion.button>
      </motion.div>
    </>
  );
};

export default LandingPage;
