import { DefaultTheme, ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import usePersistedState from "../utils/usePersistedState";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState<DefaultTheme>(dark);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} toggleTheme={toggleTheme} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
