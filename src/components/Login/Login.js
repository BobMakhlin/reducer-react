import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

// on input we donot validate, we only update the value
// on blur we donot reset the value, we validate
// then the form validation is only checked on blur...

// const emailReducer = (state, action) => {
//   switch (action.type) {
//     case "USER_INPUT":
//       return { value: action.value, isValid: null };
//     case "INPUT_BLUR":
//       return { value: state.value, isValid: state.value.includes("@") };
//     default:
//       return { value: "", isValid: false };
//   }
// };

// const passwordReducer = (state, action) => {
//   switch (action.type) {
//     case "USER_INPUT":
//       return { value: action.value, isValid: null };
//     case "INPUT_BLUR":
//       return { value: state.value, isValid: state.value.trim().length > 6 };
//     default:
//       return { value: "", isValid: null };
//   }
// };

const formReducer = (state, action) => {
  const stateCopy = { ...state };

  switch (action.type) {
    case "EMAIL_CHANGE":
      stateCopy.email = action.value;
      stateCopy.emailIsValid = null;
      break;
    case "PASSWORD_CHANGE":
      stateCopy.password = action.value;
      stateCopy.passwordIsValid = null;
      break;
    case "EMAIL_BLUR":
      stateCopy.emailIsValid = state.email.includes("@");
      break;
    case "PASSWORD_BLUR":
      stateCopy.passwordIsValid = state.password.trim().length > 6;
      break;
    default:
      throw new Error(`Unsupported action: ${action.type}`);
  }

  stateCopy.formIsValid =
    stateCopy.emailIsValid === true && stateCopy.passwordIsValid === true;

  return stateCopy;
};

const Login = (props) => {
  const [formState, dispatchForm] = useReducer(formReducer, {
    email: "",
    emailIsValid: null,
    password: "",
    passwordIsValid: null,
    formIsValid: false,
  });

  const emailChangeHandler = (event) => {
    dispatchForm({ type: "EMAIL_CHANGE", value: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchForm({ type: "PASSWORD_CHANGE", value: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchForm({ type: "EMAIL_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchForm({ type: "PASSWORD_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(formState.email, formState.password);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            formState.emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={formState.email}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            formState.passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={formState.password}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button
            type="submit"
            className={classes.btn}
            disabled={!formState.formIsValid}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
