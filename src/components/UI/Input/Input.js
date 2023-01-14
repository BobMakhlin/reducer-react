import React, { useRef, useImperativeHandle, useCallback } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const { isValid, id, type, label, value, onChange, onBlur } = props;
  const inputRef = useRef();

  const focus = useCallback(() => {
    inputRef.current.focus();
  }, [inputRef]);

  useImperativeHandle(ref, () => {
    return {
      focus,
    };
  });

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
        onChange={onChange}
        onBlur={onBlur}
        ref={inputRef}
      />
    </div>
  );
});

export default Input;
