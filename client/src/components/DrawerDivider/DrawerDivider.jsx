import React from "react";
import styles from "./DrawerDivider.module.css";

function DrawerDivider() {
  return (
    // <div className={styles.drawerDividerCard}>
    <div key={Math.random()} className={styles.dividerBar}></div>
    // </div>
  );
}

export default DrawerDivider;
