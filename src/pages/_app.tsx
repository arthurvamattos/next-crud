import { DefaultTheme, ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import usePersistedState from "../utils/usePersistedState";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", dark);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} toggleTheme={toggleTheme} />
      <ToastContainer />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
