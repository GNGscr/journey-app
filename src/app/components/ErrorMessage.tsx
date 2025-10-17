import { motion } from "framer-motion";
import { errorVariant } from "../variants/variants";
import { ErrorType } from "../types";

const ErrorMessage = ({ error }: ErrorType) => {
  return (
    <motion.p variants={errorVariant}>
      {error} 😕
    </motion.p>
  )
};

export default ErrorMessage;