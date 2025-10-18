import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { themeToggleVariant } from "../../constants/variants/variants";
import { ThemeToggleProps } from "../../constants/types";
import { Themes } from "../../constants/enums";
const { DARK } = Themes;

const ThemeToggleButton: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => (
  <motion.button
    onClick={onToggle}
    className={`fixed top-6 right-6 z-50 p-3 rounded-full ${
      theme === DARK
        ? "bg-yellow-400 text-gray-900"
        : "bg-indigo-600 text-white"
    } shadow-lg`}
    variants={themeToggleVariant}
    aria-label="Toggle theme"
  >
    {theme === DARK ? <Sun size={24} /> : <Moon size={24} />}
  </motion.button>
);

export default ThemeToggleButton;
