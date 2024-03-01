import { useState, useEffect } from "react";
import styles from "../IconCSS/IconCSS.module.css";

function HomeIcon({ iconName, expandedDrawer }) {
  const [logoDisplay, setLogoDisplay] = useState(false);

  useEffect(() => {
    setLogoDisplay(true);
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
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fill="#0d6efd"
            d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"
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

export default HomeIcon;
