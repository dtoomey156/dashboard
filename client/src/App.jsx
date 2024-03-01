import { useContext } from "react";
import styles from "./App.module.css";
import Logo from "./components/Logo/Logo.jsx";
import CheckForUser from "./components/CheckForUser/CheckForUser.jsx";
import Routes from "./components/Routes/Routes.jsx";
import { UserContext } from "./components/CheckForUser/CheckForUser.jsx";

function App() {
  const { username } = useContext(UserContext);
  return (
    <CheckForUser>
      <div className={styles.container}>
        <Logo />
        <Routes />
      </div>
    </CheckForUser>
  );

  // const { username } = useContext(UserContext);
  // return (
  //   <CheckForUser>
  //     <div
  //       className={[
  //         styles.container,
  //         !username ? styles.centerInWindow : "",
  //       ].join(" ")}
  //     >
  //       <Logo />
  //       <Routes />
  //     </div>
  //   </CheckForUser>
  // );

  // return (
  //   <div className={styles.container}>
  //     <Logo />
  //     <CheckForUser>
  //       <Routes />
  //     </CheckForUser>
  //   </div>
  // );
}

export default App;
