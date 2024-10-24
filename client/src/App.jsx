import styles from "./App.module.css";
import Logo from "./components/Logo/Logo.jsx";
import CheckForUser from "./components/CheckForUser/CheckForUser.jsx";
import Routes from "./components/Routes/Routes.jsx";
import axios from "axios";

function App() {
  axios.defaults.baseURL = "http://localhost:4040";
  axios.defaults.withCredentials = true;
  return (
    <CheckForUser>
      <div className={styles.container}>
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
