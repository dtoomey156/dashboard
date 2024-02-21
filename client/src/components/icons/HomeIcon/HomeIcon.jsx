import React from "react";
import styles from "./HomeIcon.module.css";

function HomeIcon({ iconName, expandedDrawer }) {
  return (
    <div className={styles.card}>
      <div
        className={[
          expandedDrawer ? styles.cardClickable : "",
          expandedDrawer ? styles.mousePointer : "",
        ].join(" ")}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fill="#0d6efd"
            d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"
          />
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

export default HomeIcon;
