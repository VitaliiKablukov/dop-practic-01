import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyles } from 'styles';

import { Header, Section, Container, Text } from 'components';
import { Gallery, Todos } from 'tabs';
import useThemeConfig from 'hooks/useThemeConfig';

export const App = () => {
  // custom hook
  const { theme, themeTitle, toggleTheme } = useThemeConfig();

  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Global
        styles={{
          body: {
            background: theme.colors.mainBackground,
          },
        }}
      />
      <Header themeTitle={themeTitle} toggleTheme={toggleTheme} />
      <Section>
        <Container>
          <Tabs>
            <TabList>
              <Tab>
                <Text>Task 1. Gallery</Text>
              </Tab>
              <Tab>
                <Text>Task 2. Todos</Text>
              </Tab>
            </TabList>

            <TabPanel>
              <Gallery />
            </TabPanel>

            <TabPanel>
              <Todos />
            </TabPanel>
          </Tabs>
        </Container>
      </Section>
    </ThemeProvider>
  );
};
