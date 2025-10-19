"use client";
import { Theme } from "../constants/types";
import { Themes } from "../constants/enums";
const { DARK, LIGHT } = Themes;

const useThemeToggle = (setTheme: React.Dispatch<React.SetStateAction<Theme>>) => {
  return setTheme((prev) => (prev === DARK ? LIGHT : DARK));
};
  
export default useThemeToggle;