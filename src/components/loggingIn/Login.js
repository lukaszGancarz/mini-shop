import React, { useEffect, useRef, useState } from "react";
import styles from "./Login.module.css";

const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [formIsValid, setFormIsValid] = useState(false);
  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(userName.trim().length > 4 && password.trim().length > 4);
      console.log("timeout");
    }, 500);
    return () => clearTimeout(identifier);
  }, [userName, password]);

  const onUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("user", JSON.stringify({ userName, password })); //dodawanie do storage i parsowanie w format JSON
    props.isUser(true);
  };

  return (
    <form className={styles.login} onSubmit={onSubmit}>
      <div className={styles.form}>
        <div className={styles.line}>
          <h3 htmlFor="userName">Login</h3>
          <input className={styles.input}
            type="text"
            onChange={onUserNameChange}
          ></input>
        </div>
        <div className={styles.line}>
          <h3 htmlFor="password">Password</h3>
          <input className={styles.input}
            type="password"
            onChange={onPasswordChange}
          ></input>
        </div>
        <div className={styles.but} type="submit">
          <button className={styles.button} disabled={!formIsValid}>Login</button>
        </div>
      </div>
    </form>
  );
};

export default Login;
