import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { THEME_TITLES, THEME_TITLE_LS_KEY } from 'styles';
import { BsSun, BsFillMoonFill } from 'react-icons/bs';

const { light } = THEME_TITLES;

const ThemeSwitcher = ({ themeTitle = light, toggleTheme = () => {} }) => {
  useEffect(() => {
    localStorage.setItem(THEME_TITLE_LS_KEY, themeTitle);
  }, [themeTitle]);

  return (
    <button type="button" onClick={toggleTheme}>
      {themeTitle === light ? (
        <BsSun size={30} color={'black'} />
      ) : (
        <BsFillMoonFill size={30} color={'black'} />
      )}
    </button>
  );
};

ThemeSwitcher.propTypes = {
  isLight: PropTypes.bool,
  toggleTheme: PropTypes.func.isRequired,
};

export default ThemeSwitcher;
