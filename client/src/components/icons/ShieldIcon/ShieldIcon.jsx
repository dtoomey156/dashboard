import React from "react";
import styles from "./ShieldIcon.module.css";

function ShieldIcon({ iconName, expandedDrawer }) {
  return (
    <div className={styles.card}>
      <div
        className={[
          styles.icon,
          expandedDrawer ? styles.cardClickable : "",
          expandedDrawer ? styles.mousePointer : "",
        ].join(" ")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#0d6efd"
        >
          <title>shield-outline</title>
          <path d="M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,21C15.75,20 19,15.54 19,11.22V6.3L12,3.18L5,6.3V11.22C5,15.54 8.25,20 12,21Z" />
        </svg>
      </div>
      <h1
        className={[
          styles.drawerTitle,
          expandedDrawer ? styles.cardClickable : "",
          expandedDrawer ? styles.mousePointer : "",
        ].join(" ")}
      >
        {iconName}
      </h1>
    </div>
  );
}

export default ShieldIcon;
