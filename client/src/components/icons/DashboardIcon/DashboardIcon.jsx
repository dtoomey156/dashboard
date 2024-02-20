import React from "react";
import styles from "./DashboardIcon.module.css";

function DashboardIcon({ iconName }) {
  return (
    <div className={styles.card}>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fill="#0d6efd"
            d="M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z"
          />
        </svg>
      </div>
      <h1 className={styles.drawerTitle}>{iconName}</h1>
    </div>
  );
}

export default DashboardIcon;
