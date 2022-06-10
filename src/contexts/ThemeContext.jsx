import { createContext, useContext } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/GlobalStyles";
import { lightTheme } from "../styles/Theme";

const ThemeContext = createContext();
export const useThemeContext = () => useContext(ThemeContext);

const ThemeContextProvider = ({ children }) => {
  const initTheme = lightTheme;
  return (
    <ThemeContext.Provider value={{}}>
      <ThemeProvider theme={initTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
