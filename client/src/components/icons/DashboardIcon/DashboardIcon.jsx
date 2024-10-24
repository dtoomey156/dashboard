import { useState, useEffect, useRef } from "react";
import styles from "../IconCSS/IconCSS.module.css";

function DashboardIcon({ iconName, expandedDrawer, passedFunction }) {
  const [logoDisplay, setLogoDisplay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLogoDisplay(true);
    }, 60);
  }, []);

  return (
    <div
      className={[styles.card, logoDisplay ? styles.fadeOnIcons : ""].join(" ")}
    >
      <button
        className={[
          styles.icon,
          expandedDrawer ? styles.cardClickable : "",
          expandedDrawer ? styles.mousePointer : "",
        ].join(" ")}
        // onClick={passedFunction}
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
