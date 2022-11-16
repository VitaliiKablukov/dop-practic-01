import { IoLogoReact } from 'react-icons/io5';
import ThemeSwitcher from 'components/ThemeSwitcher';
import { NavBar, HeaderWrapper, NavText } from './Header.styled';
import { Container } from 'components';
import { useTheme } from '@emotion/react';

export const Header = ({ themeTitle, toggleTheme }) => {
  const theme = useTheme();

  return (
    <>
      <NavBar>
        <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
          <HeaderWrapper>
            <IoLogoReact size="40px" color={theme.colors.accent} />

            <NavText>Lesson 2</NavText>
          </HeaderWrapper>
          <ThemeSwitcher themeTitle={themeTitle} toggleTheme={toggleTheme} />
        </Container>
      </NavBar>
    </>
  );
};
