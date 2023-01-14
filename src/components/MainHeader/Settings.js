import { useCallback, useContext } from "react";
import ThemeContext from "../../store/theme-context";
import { ThemePicker } from "../UI/ThemePicker/ThemePicker";

const Settings = () => {
  const themeCtx = useContext(ThemeContext);
  const { themesAvailable, changeTheme } = themeCtx;

  const handleChange = useCallback(
    (value) => {
      changeTheme(value);
    },
    [changeTheme]
  );

  return (
    <ThemePicker themes={themesAvailable} onChange={handleChange} />
  );
};

export default Settings;
