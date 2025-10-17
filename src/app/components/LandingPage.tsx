import Head from "next/head";
import { motion, Variants } from "framer-motion";
import { Sparkles } from "lucide-react";
import {
  landingPageVariant,
  sparklesVariant,
  chooseJourneyVariant,
  embarkAdventureVariant,
  startJourneyVariant,
} from "../variants/variants";
import { LandingPageProps } from "../types";
import { Themes, Journey } from "../enums";

const LandingPage: React.FC<LandingPageProps> = ({ theme, onStart }) => {
  const { DARK } = Themes;
  const {
    LANDING_PAGE,
    CHOOSE_YOUR_JOURNEY,
    EMBARK_ON_ADVENTURE,
    START_YOUR_JOURNEY,
  } = Journey;
  const pageVariants: Variants = landingPageVariant;

  return (
    <>
      <Head>
        <title>{LANDING_PAGE}</title>
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
          {CHOOSE_YOUR_JOURNEY}
        </motion.h1>

        <motion.p
          variants={embarkAdventureVariant}
          className={`text-xl mb-8 ${
            theme === DARK ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {EMBARK_ON_ADVENTURE}
        </motion.p>

        <motion.button
          variants={startJourneyVariant}
          onClick={onStart}
          className={`px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full
              text-white font-semibold text-lg shadow-2xl hover:shadow-purple-500/50 transition-shadow`}
        >
          {START_YOUR_JOURNEY}
        </motion.button>
      </motion.div>
    </>
  );
};

export default LandingPage;
