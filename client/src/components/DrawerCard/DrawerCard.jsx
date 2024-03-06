import { useEffect, useState } from "react";
import { data } from "../../data/data";
import styles from "./DrawerCard.module.css";
import DashboardIcon from "../icons/DashboardIcon/DashboardIcon";
import DrawerDivider from "../DrawerDivider/DrawerDivider";
import HomeIcon from "../icons/HomeIcon/HomeIcon";
import CogIcon from "../icons/CogIcon/CogIcon";
import MessageQuestionIcon from "../icons/MessageQuestionIcon";
import ShieldIcon from "../icons/ShieldIcon";
import parse from "html-react-parser";

function DrawerCard({ expandedDrawer }) {
  const [logoDisplay, setLogoDisplay] = useState(false);

  const staticUi = [
    <DashboardIcon
      key={"dashboard"}
      iconName="Dashboard"
      expandedDrawer={expandedDrawer}
    />,
    <DrawerDivider key={"divider1"} />,
    <HomeIcon key={"home"} iconName="Home" expandedDrawer={expandedDrawer} />,
    <DrawerDivider key={"divider2"} />,
    <CogIcon
      key={"settings"}
      iconName="Settings"
      expandedDrawer={expandedDrawer}
    />,
    <MessageQuestionIcon
      key={"support"}
      iconName="Support"
      expandedDrawer={expandedDrawer}
    />,
    <ShieldIcon
      key={"privacy"}
      iconName="Privacy"
      expandedDrawer={expandedDrawer}
    />,
  ];

  // const array = [
  //   <DashboardIcon key={1} iconName="Dashboard" />,
  //   <ShieldIcon key={2} iconName="Privacy" />,
  // ];

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (username) {
  //       setLogoDisplay(true);
  //     }
  //   }, 1);
  // }, []);

  useEffect(() => {
    setLogoDisplay(true);
  }, []);

  const userSelectedIcons = [];
  data.map((index) => {
    userSelectedIcons.push(index);
  });

  userSelectedIcons.reverse().forEach((item) => {
    staticUi.splice(3, 0, item);
  });

  return staticUi.map((each) =>
    !each.svg ? (
      each
    ) : (
      <div
        key={each.name}
        className={[styles.card, logoDisplay ? styles.fadeOnIcons : ""].join(
          " "
        )}
      >
        <button
          className={[
            styles.icon,
            expandedDrawer ? styles.cardClickable : "",
            expandedDrawer ? styles.mousePointer : "",
          ].join(" ")}
        >
          {parse(each.svg)}
        </button>
        <button
          className={[
            styles.drawerTitle,
            expandedDrawer ? styles.cardClickable : "",
            expandedDrawer ? styles.mousePointer : "",
          ].join(" ")}
        >
          {each.name}
        </button>
      </div>
    )
  );
}

export default DrawerCard;
