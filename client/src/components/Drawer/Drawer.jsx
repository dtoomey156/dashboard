import { useState, useContext } from "react";
import styles from "./Drawer.module.css";
import DrawerCard from "../DrawerCard/DrawerCard";
import { UserContext } from "../CheckForUser/CheckForUser";
import axios from "axios";

function Drawer() {
  const { setUsername } = useContext(UserContext);
  const [expandedDrawer, setExpandedDrawer] = useState(false);

  function applyTransitions() {
    setExpandedDrawer(true);
  }
  function removeTransitions() {
    setExpandedDrawer(false);
  }

  function logout() {
    axios.post("/logout").then(() => {
      // setWs(null);
      // setId(null);
      setUsername(null);
    });
  }

  return (
    <>
      <div
        className={[
          styles.drawer,
          expandedDrawer ? styles.drawerRightBorder : "",
          expandedDrawer ? styles.extendoDrawer : "",
        ].join(" ")}
        onClick={applyTransitions}
        onMouseLeave={removeTransitions}
      >
        <DrawerCard expandedDrawer={expandedDrawer} />
      </div>
      <div className={styles.logoutBtnContainer}>
        <button className={styles.logoutBtn} onClick={logout}>
          <svg
            className={styles.logoutImage}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default Drawer;
