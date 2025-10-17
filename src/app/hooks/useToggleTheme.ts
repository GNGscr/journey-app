import { Theme } from "@/app/types";
import { Themes } from "../enums";
const { DARK, LIGHT } = Themes;

const useThemeToggle = (setTheme: React.Dispatch<React.SetStateAction<Theme>>) => {
  return setTheme((prev) => (prev === DARK ? LIGHT : DARK));
};
  
export default useThemeToggle;