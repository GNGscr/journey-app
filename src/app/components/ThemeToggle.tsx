import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { ThemeToggleProps } from '../types';

  
  const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => (
    <motion.button
      onClick={onToggle}
      className={`fixed top-6 right-6 z-50 p-3 rounded-full ${
        theme === 'dark' ? 'bg-yellow-400 text-gray-900' : 'bg-indigo-600 text-white'
      } shadow-lg`}
      whileHover={{ scale: 1.1, rotate: 180 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 300 }}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
    </motion.button>
  );

  export default ThemeToggle;