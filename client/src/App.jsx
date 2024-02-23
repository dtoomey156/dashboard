import { useContext, useState } from "react";
import styles from "./App.module.css";
// import DrawerIcons from "./components/DrawerIcons/DrawerIcons.jsx";
import DrawerCard from "./components/DrawerCard/DrawerCard.jsx";
import Logo from "./components/Logo/Logo.jsx";
import CheckForUser from "./components/CheckForUser/CheckForUser.jsx";
import Routes from "./components/Routes/Routes.jsx";

function App() {
  const [expandedDrawer, setExpandedDrawer] = useState(false);
  // const { username } = useContext(UserContext);

  function applyTransitions() {
    setExpandedDrawer(true);
  }
  function removeTransitions() {
    setExpandedDrawer(false);
  }
  return (
    <div className={styles.container}>
      <Logo />
      <CheckForUser>
        <Routes />
      </CheckForUser>

      {/* <div
          className={[
            styles.drawer,
            expandedDrawer ? styles.drawerRightBorder : "",
            expandedDrawer ? styles.extendoDrawer : "",
          ].join(" ")}
          onClick={applyTransitions}
          onMouseLeave={removeTransitions}
        >
          <DrawerCard expandedDrawer={expandedDrawer} />
        </div> */}
    </div>
  );
}

export default App;
