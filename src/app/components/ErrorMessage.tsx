import { motion } from "framer-motion";
import { ErrorType } from "../types";

const ErrorMessage = ({ error }: ErrorType) => {
  return (
    <motion.p
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 2, opacity: 1 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}>
        {error} 😕
    </motion.p>
  )
}

export default ErrorMessage;