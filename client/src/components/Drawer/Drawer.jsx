import React from "react";
import { useState } from "react";
import styles from "./Drawer.module.css";
import DrawerCard from "../DrawerCard/DrawerCard";

function Drawer() {
  const [expandedDrawer, setExpandedDrawer] = useState(false);

  function applyTransitions() {
    setExpandedDrawer(true);
  }
  function removeTransitions() {
    setExpandedDrawer(false);
  }
  return (
    <div
      className={[
        styles.drawer,
        expandedDrawer ? styles.drawerRightBorder : "",
        expandedDrawer ? styles.extendoDrawer : "",
      ].join(" ")}
      onClick={applyTransitions}
      onMouseLeave={removeTransitions}
    >
      <DrawerCard expandedDrawer={expandedDrawer} />
    </div>
  );
}

export default Drawer;
