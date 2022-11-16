import { useState } from 'react';
import {
  theme as themeConfig,
  colors,
  THEME_TITLE_LS_KEY,
  THEME_TITLES,
} from 'styles';

const { light, dark } = THEME_TITLES;

export const useThemeConfig = () => {
  const [themeTitle, setThemeTitle] = useState(() =>
    localStorage.getItem(THEME_TITLE_LS_KEY)
  );

  const toggleTheme = () => {
    setThemeTitle(prev => (prev === light ? dark : light));
  };

  const theme = Object.freeze({ ...themeConfig, colors: colors[themeTitle] });
  return { theme, themeTitle, toggleTheme };
};

export default useThemeConfig;
