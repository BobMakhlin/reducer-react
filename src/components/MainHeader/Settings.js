import { useContext } from "react";
import ThemeContext from "../../store/theme-context";
import { ThemePicker } from "../UI/ThemePicker/ThemePicker";

const Settings = (props) => {
  const themeCtx = useContext(ThemeContext);

  const handleChange = (value) => {
    console.log('Settings. value:', value);
    themeCtx.changeTheme(value);
  };

  return <ThemePicker onChange={handleChange} />;
};

export default Settings;
