import { useContext, useState, useEffect, useRef } from "react";
import { UserContext } from "../../CheckForUser/CheckForUser";
import styles from "../IconCSS/IconCSS.module.css";

function DashboardIcon({ iconName, expandedDrawer }) {
  const { username } = useContext(UserContext);
  const [logoDisplay, setLogoDisplay] = useState(false);
  console.log(logoDisplay, "logodisplay from Dashboard Icon");

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLogoDisplay(true);
  //   }, 1);
  // }, []);

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
