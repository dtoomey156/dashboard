import { useState, useContext, useEffect } from "react";
import { UserContext } from "../CheckForUser/CheckForUser";

import styles from "./RegisterOrLogin.module.css";

import axios from "axios";

function RegisterOrLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginOrRegister, setIsLoginOrRegister] = useState("login");
  const { setUsername: setLoggedInUsername, setId } = useContext(UserContext);
  const [fadeOn, setFadeOn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeOn(true);
    }, 60);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(username);
    console.log(password);
    const url = isLoginOrRegister === "signup" ? "signup" : "login";
    const { data } = await axios.post(url, { username, password });
    // after the user has logged in, sets user context with the data from the form that posts to the backend
    setLoggedInUsername(username);
    setId(data.id);
    // erases inputs on the form after submit
    setUsername("");
    setPassword("");
  }

  return (
    <div className={styles.container}>
      <form
        className={[styles.registerOrLogin, fadeOn ? styles.fade : ""].join(
          " "
        )}
        onSubmit={handleSubmit}
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
            onClick={(e) => {
              e.preventDefault();
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
