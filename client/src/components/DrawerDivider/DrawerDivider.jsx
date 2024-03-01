import { useContext, useState, useEffect } from "react";
import { UserContext } from "../CheckForUser/CheckForUser";
import styles from "./DrawerDivider.module.css";

function DrawerDivider() {
  const { username } = useContext(UserContext);
  const [logoDisplay, setLogoDisplay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (username) {
        setLogoDisplay(true);
      }
    }, 1);
  }, [username]);
  return (
    // <div className={styles.drawerDividerCard}>
    <div
      className={[styles.dividerBar, logoDisplay ? styles.fadeOn : ""].join(
        " "
      )}
    ></div>
    // </div>
  );
}

export default DrawerDivider;
