import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { themeToggleVariant } from "../variants/variants";
import { ThemeToggleProps } from "../types";

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => (
  <motion.button
    onClick={onToggle}
    className={`fixed top-6 right-6 z-50 p-3 rounded-full ${
      theme === "dark"
        ? "bg-yellow-400 text-gray-900"
        : "bg-indigo-600 text-white"
    } shadow-lg`}
    variants={themeToggleVariant}
    aria-label="Toggle theme"
  >
    {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
  </motion.button>
);

export default ThemeToggle;
