import React, { createContext, useContext } from "react";
import { DefaultTheme } from "styled-components";

import usePersistedState from "../utils/usePersistedState";

import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

interface ThemeContextData {
  theme: DefaultTheme;
  toggleTheme: Function;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}

export function withThemeContext(Component) {
  return function contextComponent(props) {
    return (
      <ThemeContext.Consumer>
        {(context) => <Component {...props} context={context} />}
      </ThemeContext.Consumer>
    );
  };
}
