import { useCallback, useContext } from "react";
import styles from "./ThemePicker.module.css";

export const ThemePicker = (props) => {
  const { onChange } = props;

  const handleChange = useCallback(
    (event) => {
      onChange(event.target.value);
    },
    [onChange]
  );

  return (
    <select onChange={handleChange}>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
  );
};
