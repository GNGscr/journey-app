import { Themes } from "../enums";
const { DARK } = Themes;

const useThemeBackground = ({ theme }: { theme: string }) => {
  return theme === DARK
    ? "bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white"
    : "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-900";
};

export default useThemeBackground;