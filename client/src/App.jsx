import UserContextProvider from "./components/UserProvider/UserProvider.jsx";
import { useState } from "react";
import styles from "./App.module.css";
// import DrawerIcons from "./components/DrawerIcons/DrawerIcons.jsx";
import DrawerCard from "./components/DrawerCard/DrawerCard.jsx";

function App() {
  const [expandedDrawer, setExpandedDrawer] = useState(false);

  function applyTransitions() {
    setExpandedDrawer(true);
  }
  function removeTransitions() {
    setExpandedDrawer(false);
  }
  return (
    <UserContextProvider>
      <div className={styles.container}>
        <div
          className={[
            styles.drawer,
            expandedDrawer ? styles.drawerRightBorder : "",
            expandedDrawer ? styles.extendoDrawer : "",
          ].join(" ")}
          onClick={applyTransitions}
          onMouseLeave={removeTransitions}
        >
          {/* <DrawerIcons /> */}
          <DrawerCard expandedDrawer={expandedDrawer} />
        </div>
      </div>
    </UserContextProvider>
  );
}

export default App;
