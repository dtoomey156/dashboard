import { useState } from "react";

import styles from "./RegisterOrLogin.module.css";

function RegisterOrLogin() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLoginOrRegister, setIsLoginOrRegister] = useState("login");
  return (
    <div className={styles.container}>
      <form className={styles.registerOrLogin}>
        <input
          value={username}
          type="username"
          placeholder="Username"
          required
        />
        <input
          value={password}
          type="password"
          placeholder="Password"
          required
        />
        <button className={styles.submit}>
          <span>Submit</span>
        </button>
        <div className={styles.loginQuestion}>
          Already a memeber?
          <button className={styles.toggleFormButton}>LOGIN</button>
        </div>
      </form>
    </div>
  );
}

export default RegisterOrLogin;
