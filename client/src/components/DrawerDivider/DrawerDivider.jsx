import { useState, useEffect } from "react";
import styles from "./DrawerDivider.module.css";

function DrawerDivider() {
  const [logoDisplay, setLogoDisplay] = useState(false);

  useEffect(() => {
    setLogoDisplay(true);
  }, []);

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
