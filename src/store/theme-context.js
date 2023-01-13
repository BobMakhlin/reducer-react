import React, { useState } from "react";

const ThemeContext = React.createContext({
  theme: null,
  changeTheme: () => {
    // By default is a dummy empty function.
  },
});

export const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState(null);

  console.log("ThemeProvider. theme:", theme);

  const changeTheme = (value) => {
    console.log("changeTheme. value:", value);
    setTheme(value);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
