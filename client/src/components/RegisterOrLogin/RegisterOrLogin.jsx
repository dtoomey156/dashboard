import { useState } from "react";

import styles from "./RegisterOrLogin.module.css";

function RegisterOrLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginOrRegister, setIsLoginOrRegister] = useState("login");
  return (
    <div className={styles.container}>
      <form
        className={styles.registerOrLogin}
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="username"
          placeholder="Username"
          required
        />
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Password"
          required
        />
        <button className={styles.submit}>
          <span>{isLoginOrRegister === "signup" ? "Signup" : "Login"}</span>
        </button>
        <div className={styles.loginQuestion}>
          <span>or</span>
          <span>...</span>
          <button
            className={styles.toggleFormButton}
            onClick={() => {
              if (isLoginOrRegister === "login") {
                setIsLoginOrRegister("signup");
              } else if (isLoginOrRegister === "signup") {
                setIsLoginOrRegister("login");
              }
            }}
          >
            <span>{isLoginOrRegister === "login" ? "SIGNUP" : "LOGIN"}</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterOrLogin;
