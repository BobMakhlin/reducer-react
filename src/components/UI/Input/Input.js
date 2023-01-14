import { useCallback } from "react";
import classes from "./Input.module.css";

const Input = ({ isValid, id, type, label, value, onChange, onBlur }) => {
  const handleChange = useCallback((event) => onChange(event), [onChange]);
  const handleBlur = useCallback((event) => onBlur(event), [onBlur]);

  return (
    <div
      className={`${classes.control} ${
        isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default Input;
