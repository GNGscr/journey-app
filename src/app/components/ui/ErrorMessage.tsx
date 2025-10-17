import { motion } from "framer-motion";
import { errorVariant } from "../../constants/variants/variants";
import { ErrorMessageType } from "../../constants/types";
import { Themes } from "../../constants/enums";

const ErrorMessage = ({ error, theme }: ErrorMessageType) => {
  return (
    <motion.p
      className={`h-screen grid place-content-center text-5xl px-4 py-24
        ${
          theme === Themes.DARK
            ? "bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-gray-300"
            : "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-700"
        }`}
      variants={errorVariant}
    >
      {error} 😕
    </motion.p>
  );
};

export default ErrorMessage;