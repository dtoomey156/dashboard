import React from "react";
import styles from "./DrawerIcons.module.css";
import DrawerDivider from "../DrawerDivider/DrawerDivider.jsx";
import DashboardIcon from "../icons/DashboardIcon";
import HomeIcon from "../icons/HomeIcon";
import CardAccountIcon from "../icons/CardAccountIcon";
import MessageIcon from "../icons/MessageIcon";
import ClockIcon from "../icons/ClockIcon";
import NoteIcon from "../icons/NoteIcon";
import AccountIcon from "../icons/AccountIcon";
import CogIcon from "../icons/CogIcon";
import MessageQuestionIcon from "../icons/MessageQuestionIcon";
import ShieldIcon from "../icons/ShieldIcon";

// function DrawerCard() {
//   const data = [
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//       <path
//         fill="#0d6efd"
//         d="M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z"
//       />
//     </svg>,
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//       <path fill="#0d6efd" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
//     </svg>,
//   ];

//   // const data = [1, 2, 3, 4, 5];

//   return data.map((icon) => <div style={{ width: "5rem" }}>{icon}</div>);
// }

function DrawerIcons() {
  return (
    <div className={styles.iconContainer}>
      <DashboardIcon />
      <DrawerDivider />
      <HomeIcon />
      <CardAccountIcon />
      <MessageIcon />
      <ClockIcon />
      <NoteIcon />
      <AccountIcon />
      <DrawerDivider />
      <CogIcon />
      <MessageQuestionIcon />
      <ShieldIcon />
    </div>
  );
}

export default DrawerIcons;
