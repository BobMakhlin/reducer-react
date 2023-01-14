import { useCallback, useContext } from "react";
import AuthContext from "../../store/auth-context";
import ThemeContext from "../../store/theme-context";
import { ThemePicker } from "../UI/ThemePicker/ThemePicker";

const Settings = () => {
  const authCtx = useContext(AuthContext);
  const themeCtx = useContext(ThemeContext);
  const { themesAvailable, changeTheme } = themeCtx;

  const handleChange = useCallback(
    (value) => {
      changeTheme(value);
    },
    [changeTheme]
  );

  return (
    authCtx.isLoggedIn && (
      <ThemePicker themes={themesAvailable} onChange={handleChange} />
    )
  );
};

export default Settings;
