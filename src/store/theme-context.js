import React, { useCallback, useState } from "react";

const THEMES = ["dark", "light"];
const DEFAULT_THEME = "dark";

const ThemeContext = React.createContext({
  themesAvailable: THEMES,
  theme: DEFAULT_THEME,
  changeTheme: () => {
    // By default is a dummy empty function.
  },
});

export const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  console.log("Theme provider is being redrawn. Theme:", theme);

  const changeTheme = useCallback((value) => {
    if (!THEMES.includes(value)) {
      throw new Error(`Theme ${value} is not supported.`);
    }

    setTheme(value);
  }, []);

  return (
    <ThemeContext.Provider
      value={{ themesAvailable: THEMES, theme, changeTheme }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
