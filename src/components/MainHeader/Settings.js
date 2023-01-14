import { useCallback, useContext } from "react";
import AuthContext from "../../store/auth-context";
import ThemeContext from "../../store/theme-context";
import { DropDownList } from "../UI/DropDownList/DropDownList";

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
      <DropDownList items={themesAvailable} onChange={handleChange} />
    )
  );
};

export default Settings;
