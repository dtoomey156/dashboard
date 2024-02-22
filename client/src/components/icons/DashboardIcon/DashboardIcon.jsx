import React from "react";
import styles from "./DashboardIcon.module.css";

function DashboardIcon({ iconName, expandedDrawer }) {
  return (
    <div className={styles.card}>
      <button
        className={[
          styles.icon,
          expandedDrawer ? styles.cardClickable : "",
          expandedDrawer ? styles.mousePointer : "",
        ].join(" ")}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fill="#0d6efd"
            d="M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z"
          />
        </svg>
      </button>
      <button
        className={[
          styles.drawerTitle,
          expandedDrawer ? styles.cardClickable : "",
          expandedDrawer ? styles.mousePointer : "",
        ].join(" ")}
      >
        {iconName}
      </button>
    </div>
  );
}

export default DashboardIcon;
